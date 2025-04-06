type MessageType = 'success' | 'warning' | 'info' | 'error'
export interface IMessageProps {
  id?:string,
  message?:string,
  type?:MessageType,
  duration?:number,
  center?:boolean,
  onClose?:()=>void,
  offset?:number
}

export type MessageOptions = string | IMessageProps