MM.UI.Backend.Firebase = Object.create(MM.UI.Backend, {
	id: {value: "firebase"}
});

MM.UI.Backend.Firebase.init = function(select) {
	MM.UI.Backend.init.call(this, select);
	
	this._online = false;
	this._list = this._node.querySelector(".list");
	this._server = this._node.querySelector(".server");
	this._server.value = localStorage.getItem(this._prefix + "server") || "my-mind";

	this._remove = this._node.querySelector(".remove");
	this._remove.addEventListener("click", this);
	
	MM.subscribe("firebase-list", this);
}

MM.UI.Backend.Firebase.setState = function(data) {
	this._backend.connect(data.s);
	this._load(data.id);
}

MM.UI.Backend.Firebase.getState = function() {
	var data = {
		id: MM.App.map.getId(),
		s: this._server.value
	};
	return data;
}

MM.UI.Backend.Firebase.show = function(mode) {
	MM.UI.Backend.show.call(this, mode);
	this._sync();
}

MM.UI.Backend.Firebase.handleEvent = function(e) {
	MM.UI.Backend.handleEvent.call(this, e);

	switch (e.target) {
		case this._remove:
			var id = this._list.value;
			if (!id) { break; }
			MM.App.ui.setThrobber(true);
			this._backend.remove(id).then(
				function() { MM.App.ui.setThrobber(false); },
				this._error.bind(this)
			);
		break;
	}
}

MM.UI.Backend.Firebase.handleMessage = function(message, publisher, data) {
	switch (message) {
		case "firebase-list":
			this._list.innerHTML = "";
			if (Object.keys(data).length) {
				this._buildList(data, this._list);
			} else {
				var o = document.createElement("option");
				o.innerHTML = "(no maps saved)";
				this._list.appendChild(o);
			}
			this._sync();
		break;
	}
}

MM.UI.Backend.Firebase._action = function() {
	if (!this._online) {
		localStorage.setItem(this._prefix + "server", this._server.value);
		this._go.disabled = true;
		this._backend.connect(this._server.value).then(
			this._connected.bind(this),
			this._error.bind(this)
		);
		return;
	}
	
	MM.UI.Backend._action.call(this);
}

MM.UI.Backend.Firebase.save = function() {
	MM.App.ui.setThrobber(true);

	var map = MM.App.map;
	this._backend.save(map.toJSON(), map.getId(), map.getName()).then(
		this._saveDone.bind(this),
		this._error.bind(this)
	);
}

MM.UI.Backend.Firebase.load = function() {
	this._load(this._list.value);
}

MM.UI.Backend.Firebase._load = function(id) {
	MM.App.ui.setThrobber(true);

	this._backend.load(id).then(
		this._loadDone.bind(this),
		this._error.bind(this)
	);
}

MM.UI.Backend.Firebase._connected = function() {
	this._online = true;
	this._sync();
}

MM.UI.Backend.Firebase._sync = function() {
	if (!this._online) {
		this._go.innerHTML = "Connect";
		return;
	}

	this._go.disabled = false;
	if (this._mode == "load" && !this._list.value) { this._go.disabled = true; }
	this._go.innerHTML = this._mode.charAt(0).toUpperCase() + this._mode.substring(1);
}
