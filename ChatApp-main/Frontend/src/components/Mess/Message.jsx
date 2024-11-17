import {useAuthContext} from "../../context/AuthContext.jsx"
import { extractTime } from "../../utils/extractTime.js";
import useCoversation from "../../zustand/useConversation";

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useCoversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilepic:selectedConversation?.profilepic;
  const bubbleBgColor = fromMe ? 'bg-blue-500': ''
  const shakeClass = message.shouldShake ? "shake" : ""
  return(
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}  pb-2`}>{message.message}</div>    
			<div className=' text-black opacity-40 chat-footer text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
}

export default Message
