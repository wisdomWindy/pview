import type { MessageOptions } from "./message.type";
import MessageComponent from "./message";
import { createVNode,render,VNode } from "vue";
const instance:VNode[] =[];
export default function Message(options:MessageOptions){
  if(typeof options === "string"){
    options = {
      message:options
    }
  }
  let offset = options.offset ||20;
  instance.forEach(vnode=>{
    offset+=60
  })
  const userClose = options.onClose;
  const ops = {
    ...options,
    offset,
    onClose:()=>{
      
      userClose && userClose()

    }
  }
 const messageVNode = createVNode(MessageComponent,ops)
 messageVNode.props!.onDestroy = ()=>{
  render(null,container)
  window.document.body.removeChild(container)
 }
 const container = window.document.createElement("div");
 render(messageVNode,container)
 window.document.body.appendChild(container.firstElementChild!)
 instance.push(messageVNode)
}