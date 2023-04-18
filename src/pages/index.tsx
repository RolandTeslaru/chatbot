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
import { codeDump } from "@/components/codeDump";
import { NextApiRequest, NextApiResponse } from 'next'

interface ChatData {
  message: string;
  type: string;
}




export default function Home() {
  const {systemTheme, theme, setTheme} = useTheme();

  // OpenAI States
  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);



  // Background code animation
  const [codeChunk, setCodeChunk] = useState<string>("");
  const [hide, setHide] = useState<boolean>(false);

  useEffect(() => {


    const errorMsgChunks = codeDump.split(/\r\n|\r|\n/);
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

  // OpenAI Logic

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
      //@ts-expect-error
      setChatLog((prevChatLog) => [...prevChatLog, {type: 'bot', message:response.data.choices[0].message.content}]);
      setIsLoading(false);

    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
    })
    
  }


  // TextArea Auto Resize

  function autoAdjust(textarea:any) {
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
                A project created by Teslaru Roland using the OpenAI API
              </motion.h4>
              <motion.h4
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className={s.text}
              >
                A project created by Teslaru Roland using the OpenAI API
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
                  theme={theme}
                />
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, ease: "linear", duration: 0.2 }}
                >
                  &quot;ChatBot&quot;
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, ease: "linear", duration: 0.2 }}
                  className={s.more}
                >
                  <ThemeButton className={s.button} />
                  <a target="_blank" href="https://github.com/RolandTeslaru/chatbot">View Source</a>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                className={s.chat}>
                {chatLog.map((chat: ChatData, index) => {
                  if (chat.type === "user")
                    return (
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`${s.message} ${s.user}`} key={index}>
                        <h4 className={s.type}>&quot;{chat.type}&quot;</h4>
                        <p>{chat.message}</p>
                      </motion.div>
                    );
                  else
                    return (
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`${s.message} ${s.bot}`} key={index}>
                        <h4 className={s.type}>&quot;{chat.type}&quot;</h4>
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
                A project created by Teslaru Roland using the OpenAI API
              </motion.h4>
              <motion.h4
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className={s.text}
              >
                A project created by Teslaru Roland using the OpenAI API
              </motion.h4>
            </div>
          </>
        )}
      </div>
    </>
  );
}

