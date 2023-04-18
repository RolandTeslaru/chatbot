import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import s from "../styles/home.module.scss";
import { useTheme } from "next-themes";
import ThemeButton from '@/components/ThemeButton'
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'
import Arrow from '@/components/Arrow'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })


const errorMsg: string = ` 1 of 2 unhandled errors
Unhandled Runtime Error

ReferenceError: PRESEhjilhjTS is not defined
Source

components\ThreeComponents\Lines\Lines.ts (186:6) @ setPreset

  184 | this.MAX_SPEED = PRESETS[val].MAX_SPEED;
  185 | this.frequency = PRESETS[val].frequency;
> 186 | this.position.x = PRESEhjilhjTS[val].position.x;
      |      ^
  187 | this.position.y = PRESETS[val].position.y;
  188 | this.position.z = PRESETS[val].position.z;
  189 | this.PRESET = val

Call Stack
init404
components\ThreeJS\Scene.ts (295:16)
<unknown>
components\ThreeJS\Scene.ts (323:2)
./components/ThreeJS/Scene.ts
file:/C:/Users/Roland/Desktop/roland-teslaru-portfolio/.next/static/chunks/pages/_app.js (6208:1)
options.factory
/_next/static/chunks/webpack.js (683:31)
__webpack_require__
file:/C:/Users/Roland/Desktop/roland-teslaru-portfolio/.next/static/chunks/webpack.js (37:33)
fn
/_next/static/chunks/webpack.js (338:21)
Layout/<
components\Layout\Layout.tsx (27:41)
commitHookEffectListMount
node_modules\react-dom\cjs\react-dom.development.js (23150:0)
commitPassiveMountOnFiber
node_modules\react-dom\cjs\react-dom.development.js (24926:0)
commitPassiveMountEffects_complete
node_modules\react-dom\cjs\react-dom.development.js (24891:0)
commitPassiveMountEffects_begin
node_modules\react-dom\cjs\react-dom.development.js (24878:0)
commitPassiveMountEffects
node_modules\react-dom\cjs\react-dom.development.js (24866:0)
flushPassiveEffectsImpl
node_modules\react-dom\cjs\react-dom.development.js (27039:0)
flushPassiveEffects
node_modules\react-dom\cjs\react-dom.development.js (26984:0)
commitRootImpl/<
node_modules\react-dom\cjs\react-dom.development.js (26769:0)

components\ThreeComponents\Lines\Lines.ts (186:6) @ setPreset

  184 | this.MAX_SPEED = PRESETS[val].MAX_SPEED;
  185 | this.frequency = PRESETS[val].frequency;
> 186 | this.position.x = PRESEhjilhjTS[val].position.x;
      |      ^
  187 | this.position.y = PRESETS[val].position.y;
  188 | this.position.z = PRESETS[val].position.z;
  189 | this.PRESET = val

Call Stack
init404
components\ThreeJS\Scene.ts (295:16)
<unknown>
components\ThreeJS\Scene.ts (323:2)
./components/ThreeJS/Scene.ts
file:/C:/Users/Roland/Desktop/roland-teslaru-portfolio/.next/static/chunks/pages/_app.js (6208:1)
options.factory
/_next/static/chunks/webpack.js (683:31)
__webpack_require__
file:/C:/Users/Roland/Desktop/roland-teslaru-portfolio/.next/static/chunks/webpack.js (37:33)
fn
/_next/static/chunks/webpack.js (338:21)
Layout/<
1 of 1 unhandled error
Unhandled Runtime Error

TypeError: can't convert undefined to object
Source

components\ThreeComponents\ParticleModel.ts (297:28) @ processMesh

  295 |     (i + j) * 3
  296 |   );
> 297 |   particlesRandomness.set(undefined);
      |                      ^
  298 |   this.uRandom = i + j;
  299 |   sizes[i + j] = 1.1;
  300 | }

Call Stack
loadModel/<
components\ThreeComponents\ParticleModel.ts (326:32)
loadModel
components\ThreeComponents\ParticleModel.ts (321:11)
initPoints
components\ThreeComponents\ParticleModel.ts (338:10)
ParticleModel
components\ThreeComponents\ParticleModel.ts (258:9)
1 of 1 unhandled error
Unhandled Runtime Error

ReferenceError: null is not defined
Source

components\ThreeComponents\ParticleModel.ts (273:20) @ processMesh
  267 |async #processMesh(modelMesh: THREE.Mesh){
  268 |    let sizes:number[] =  [];
  269 |    let exn = 0.2;
  270 |    let points: THREE.Points;
  271 |    let points: THREE.Points;
  272 | 
> 273 |    const sampler = new MeshSurfaceSampler(modelMesh).setWeightAttribute(null).build();
      |                    ^
  274 |    let n = new THREE.Vector3();
  275 | 
  276 |    const particlesPostions = new Float32Array(this.pointsNumber * 3);

Call Stack
loadModel/<
components\ThreeComponents\ParticleModel.ts (325:32)
loadModel
components\ThreeComponents\ParticleModel.ts (320:11)
initPoints
components\ThreeComponents\ParticleModel.ts (337:10)
./components/ThreeJS/Scene.ts
file:/C:/Users/Roland/Desktop/roland-teslaru-portfolio/.next/static/chunks/pages/_app.js (6208:1)
options.factory
/_next/static/chunks/webpack.js (683:31)
__webpack_require__
file:/C:/Users/Roland/Desktop/roland-teslaru-portfolio/.next/static/chunks/webpack.js (37:33)

`;

const testChatLog = [
 

]

export default function Home() {

  const [inputValue, setInputValue] = useState('');
  const {systemTheme, theme, setTheme} = useTheme();
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);




  const [codeChunk, setCodeChunk] = useState<string>("");
  const [hide, setHide] = useState<boolean>(false);

  useEffect(() => {
    const errorMsgChunks = errorMsg.split(/\r\n|\r|\n/);
    const textDivisor = 20;
    const chunkSize = Math.ceil(errorMsgChunks.length / textDivisor);

    const chunkedText: any[] = [];

    for (let i = 1; i <= textDivisor; i++) {
      const chunk = errorMsgChunks.slice(0, chunkSize * i);
      chunkedText.push(chunk.join("\n"));
    }
    setCodeChunk(chunkedText[0]);
    let currentState = 0; // initial state
    const intervalTime = 100; // time between state changes in milliseconds

    const intervalId = setInterval(() => {
      if (currentState < textDivisor - 1) {
        currentState++;
      } else {
        clearInterval(intervalId); 
        setTimeout(() => {
            setHide(true);

        }, 1000)
      }
      setCodeChunk(chunkedText[currentState]);
    }, intervalTime);
  }, []);

  const handleSubmit = (event:any) => {
    event.preventDefault();
    if(inputValue !== '')
    {
      //@ts-ignore
      setChatLog((prevChatLog) => [...prevChatLog, {type: 'user', message:inputValue}]);
  
      sendMessage(inputValue);
  
      setInputValue('');
    }
  }

  const sendMessage = (message: string) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-type": "application/json",
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
    };

    const data = {
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": message}],
    };

    setIsLoading(true);

    axios.post(url, data, {headers: headers}).then((response) => {
      console.log(response.data);
      //@ts-expect-error
      setChatLog((prevChatLog) => [...prevChatLog, {type: 'bot', message:response.data.choices[0].message.content}]);
      setIsLoading(false);

    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
    })
    
  }


  function autoAdjust(textarea:HTMLTextAreaElement) {
    textarea.style.height = "auto";
    
    var maxHeight = textarea.scrollHeight + (textarea.offsetHeight - textarea.clientHeight) * 4;
    textarea.style.height = Math.min(maxHeight, textarea.scrollHeight) + "px";
    
    if (textarea.scrollHeight > 150) {
      
      textarea.style.overflowY = "scroll";
      textarea.style.height = "150px";
    } else {
      textarea.style.overflowY = "hidden";
    }
  }
  return (
    <>
      <div className={`${s.main} ${theme === "light" ? s.light : s.dark}`}>
        {!hide ? (
          <div>
            <pre>
              <code className={s.code}>{codeChunk}</code>
            </pre>
          </div>
        ) : (
          <>
            <div className={s.watermark}>
              <motion.h4
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={s.text}
              >
                A project created by Roland Teslaru using the OpenAI API
              </motion.h4>
              <motion.h4
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className={s.text}
              >
                A project created by Roland Teslaru using the OpenAI API
              </motion.h4>
            </div>

            <div className={s.content}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                className={s.header}
              >
                <Arrow
                  strokeWidth={5}
                  initial={{ opacity: 0, x: -50, y: -50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0, ease: "linear", duration: 0.2 }}
                  className={s.arrow}
                />
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, ease: "linear", duration: 0.2 }}
                >
                  "ChatBot"
                </motion.h1>
                {/* <div className={s.center}>
                </div> */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, ease: "linear", duration: 0.2 }}
                  className={s.more}
                >
                  <ThemeButton className={s.button} />
                  <a href="">View Source</a>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                className={s.chat}>
                {chatLog.map((chat, index) => {
                  if (chat.type === "user")
                    return (
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`${s.message} ${s.user}`} key={index}>
                        <h4 className={s.type}>"{chat.type}"</h4>
                        <p>{chat.message}</p>
                      </motion.div>
                    );
                  else
                    return (
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`${s.message} ${s.bot}`} key={index}>
                        <h4 className={s.type}>"{chat.type}"</h4>
                        <p>{chat.message}</p>
                      </motion.div>
                    );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, ease: "linear", duration: 0.2 }}
                className={s.footer}
              >
                <form onSubmit={handleSubmit} className={s.userControl}>
                  <textarea
                    id="myTextArea"
                    onInput={(e) => autoAdjust(e.target)}
                    placeholder="Ask me anything !"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className={s.input}
                  />
                  <button
                    className={s.sendBtn}
                    type="submit"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <div className={s.arrow}>
                      <MdKeyboardDoubleArrowRight size={20} />
                    </div>
                  </button>
                </form>
              </motion.div>
            </div>

            <div className={s.watermark}>
              <motion.h4
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className={s.text}
              >
                A project created by Roland Teslaru using the OpenAI API
              </motion.h4>
              <motion.h4
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className={s.text}
              >
                A project created by Roland Teslaru using the OpenAI API
              </motion.h4>
            </div>
          </>
        )}
      </div>
    </>
  );
}
