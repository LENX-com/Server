import { memo, useState, useEffect, useRef } from 'react';
import { MdSend, MdMic, MdCancel, MdCheckCircle } from 'react-icons/md';
import { CSSTransition } from "react-transition-group";
import recorder from "./recorder.js";
import { v4 as uuidv4 } from 'uuid';
import "./styles/ChatFooter.css";
import { useSelector } from 'react-redux'

const wait = time => new Promise(resolve => setTimeout(resolve, time));

export default memo(function ChatFooter({input, handleFocus, change, sendMessage, setFocus, image, focus, state, token, roomID, setAudioID}) {
	const [recording, setRecording] = useState(false);
	const [recordingTimer, setRecordingTimer] = useState("00:00");
	const { user } = useSelector( state => state.chat);
	const recordingEl = useRef();
	const inputRef = useRef();
	const timerInterval = useRef();
	const record = useRef();

	function handleBlur(event) {
	    if (!event.currentTarget.contains(event.relatedTarget) && !recording) {
	    	setFocus(false)
	    }
	}


	async function startRecording(e) {
		e.preventDefault();
		if (window.navigator.onLine) {
			if (focus) {
				inputRef.current.focus();
			}
			await wait(150);
			record.current = await recorder(roomID);
			setAudioID(null);
			inputRef.current.style.width = "calc(100% - 56px)"
			await wait(305);
			setRecording(true);
		} else {
			alert("No access to internet !!!");
		}
	}

	async function stopRecording() {
		if (focus) {
			inputRef.current.focus();
		}
		clearInterval(timerInterval.current);
		const stopped = record.current.stop();
		recordingEl.current.style.opacity = "0";
		await wait(300);
		setRecording(false);
		inputRef.current.style.width = "calc(100% - 112px)";
		const time = recordingTimer;
		setRecordingTimer("00:00");
		return [stopped, time];
	}

	function pad(val) {
        var valString = val + "";
        if(valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }

	function timer() {
        const start = Date.now();
        timerInterval.current = setInterval(setTime, 100);

        function setTime() {
            const delta = Date.now() - start; // milliseconds elapsed since start
            const totalSeconds = Math.floor(delta / 1000);
            setRecordingTimer(pad(parseInt(totalSeconds/60)) + ":" + pad(totalSeconds%60))
        }
	}

	function audioInputChange(e) {
		if (window.navigator.onLine) {
			const file = e.target.files[0];
			if (file) {
				setAudioID(null);
				const audioFile = new Audio(URL.createObjectURL(file));
				audioFile.addEventListener("loadedmetadata", () => {
					const totalSeconds = Math.floor(audioFile.duration);
					const time = pad(parseInt(totalSeconds/60)) + ":" + pad(totalSeconds%60);
				});
			};
		} else {
			alert("No access to internet !!!");
		}
	};


	const btnIcons = <>
		<CSSTransition
        	in={input !== "" || (input === "" && image)}
        	timeout={{
        		enter: 400,
        		exit: 200,
        	}}
        	classNames="send__animate2"
        >
        	<MdSend 
            	style={{
                    width: 20,
                    height: 20,
                    color: "white"
                }}
            />
        </CSSTransition>
        <CSSTransition
        	in={!(input !== "" || (input === "" && image))}
        	timeout={{
        		enter: 400,
        		exit: 200,
        	}}
        	classNames="send__animate"
        >
        	<MdMic 
            	style={{
            		width: 24,
                    height: 24,
                    color: "white"
            	}}
            />
    	</CSSTransition>
	</>;

	return (
		<div className="chat__footer" onBlur={handleBlur} >
	        <form>
	            <input
	            	ref={inputRef}
	                value={input}
	                onClick={handleFocus}
	                onChange={!recording ? change : null}
	                onKeyPress={recording ? () => false : null}
	                onFocus={() => setFocus(true)}
	                placeholder="Type a message"
	            />
	            {navigator.mediaDevices.getUserMedia && window.MediaRecorder ?
	            	<button 
		            	type="submit" 
		            	class="send__btn" 
		            	onClick={input !== "" || (input === "" && image) ? sendMessage : startRecording}
		            >
		                {btnIcons}
		            </button>	
		        :
		        	<>
		        		<label
			        		for="capture"  
			            	class="send__btn" 
			            >
			                {btnIcons}
			            </label> 
			        	<input
			        		style={{display: "none"}} 
				        	type="file" 
				            id="capture" 
				            accept="audio/*" 
				            capture
				            onChange={audioInputChange}  
			            />
		        	</>
		        }
	            
	        </form>
	        {recording ?
		        <div ref={recordingEl} className="record">
		        	<MdCancel
		        		style={{
	                		width: 30,
		                    height: 30,
		                    color: "#F20519"
	                	}}
	                	onClick={stopRecording}
		        	/>
		        	<div>
		        		<div className="record__redcircle"></div>
		        		<div className="record__duration">{recordingTimer}</div>
		        	</div>
		        	<MdCheckCircle
		        		style={{
	                		width: 30,
		                    height: 30,
		                    color: "#41BF49"
	                	}}
		        	/>
		        </div> : null
		    }
	    </div>
	)
})