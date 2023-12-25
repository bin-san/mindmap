# data
author = "Sandipan"


class myglob:
    more_but = document.getElementById("mod-top-more")
    m_op_window = document.getElementById("mod-top-options")
    m_close = document.getElementById("mod-op-close")
    m_op_save = document.getElementById("mod-op-save")
    m_op_import = document.getElementById("mod-op-import")
    m_op_publish = document.getElementById("mod-op-publish")


# func
def close_more_options():
    myglob.m_op_window.style.display = "none"


def open_more_options():
    myglob.m_op_window.style.display = "flex"


# set event handler
myglob.more_but.addEventListener("click", open_more_options)
# myglob.m_close.addEventListener("click", close_more_options)

prev_doc_onclick = document.onclick


def new_doc_onclick(event):
    if (
        not myglob.m_op_window.contains(event.target)
        and event.target != myglob.more_but
    ):
        close_more_options()
    if prev_doc_onclick:
        prev_doc_onclick()


document.onclick = new_doc_onclick


# editing improvements
class SanEdit:
    def __init__(self):
        self.editing_style = {
            "color": "black",
            "font-weight": "normal",
            "font-style": "normal",
            "text-decoration": "normal",
        }
        self.btn_list = {
            "bold": document.getElementById("san-e1-bold"),
            "italic": document.getElementById("san-e1-italic"),
            "underline": document.getElementById("san-e1-underline"),
            "strike": document.getElementById("san-e1-strike"),
            "bold": document.getElementById("san-e1-bold"),
            "link": document.getElementById("san-e1-link"),
            "image": document.getElementById("san-e1-image"),
        }

        self.add_listeners()

    def on_off(self, element):
        if element.value == "true":
            element.value = "false"
            element.style.backgroundColor = "white"
        else:
            element.value = "true"
            element.style.backgroundColor = "lightblue"

    def bold_listener(self):
        element = self.btn_list["bold"]
        self.on_off(element)
        if element.value == "true":
            self.editing_style["font-weight"] = "bold"
            print(";changes to bold")
        else:
            self.editing_style["font-weight"] = "normal"
            print("changed to normal")

    def add_listeners(self):
        for name, btn in self.btn_list.items():
            if name == "bold":
                btn.onclick = self.bold_listener
    
    def apply_editing_style(self, node):
        "Apply editing style to a node"
        for k, v in self.editing_style.items():
            node.style[k] = v
    
    def style_chunk(self, chunk):
        span = document.createElement("span")
        self.apply_editing_style(span)
        span.innerHTML = chunk
        return span.outerHTML


# Script Loader
script = document.createElement("script")
script.src = "./my-mind.js"
document.body.appendChild(script)

