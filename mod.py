#data
class myglob:
    more_but = document.getElementById("mod-top-more")
    m_op_window = document.getElementById("mod-top-options")
    m_close = document.getElementById("mod-op-close")
    m_op_save = document.getElementById("mod-op-save")
    m_op_import = document.getElementById("mod-op-import")
    m_op_publish = document.getElementById("mod-op-publish")

#func
def close_more_options():
    myglob.m_op_window.style.display='none'

def open_more_options():
    myglob.m_op_window.style.display = 'flex'

#set event handler
myglob.more_but.addEventListener("click", open_more_options)
#myglob.m_close.addEventListener("click", close_more_options)

prev_doc_onclick = document.onclick

def new_doc_onclick(event):
    if not myglob.m_op_window.contains(event.target) and event.target!=myglob.more_but:
        close_more_options()
    if prev_doc_onclick:
        prev_doc_onclick()
document.onclick = new_doc_onclick


