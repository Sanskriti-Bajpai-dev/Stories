import React, { useEffect, useState } from "react";

import {motion} from 'framer-motion';

import parse from 'html-react-parser';

import { ReactComponent as Logo } from "./../../assets/Close Icon.svg";

const BlogView = ({blogData, setBlogData}) => {

    const [html, setHtml] = useState("");

    useEffect(() => {
        setHtml(blogData.body)
    }, [])

    const handleClose = () => {
        setBlogData(null)
    }

  return (
    <motion.div initial = {{opacity : 0}} animate = {{opacity : 1}} transition={{ease : "linear", duration : 0.2}}
    className="fixed bg-[#2e2e2eb3] h-screen w-screen min-w-[1300px] top-0 z-10 flex justify-center items-center">
      <div className="w-[996px] h-[91vh] bg-white rounded-2xl relative flex flex-col items-center gap-9">
        <div className="absolute top-[-36px] right-[-15px]" onClick={handleClose}>
          <Logo/>
        </div>
        <div className="w-full max-h-[360px] rounded-t-2xl">
          <img
            className="w-full max-h-[360px] object-cover rounded-t-2xl"
            src={
              blogData.cover
            }
            alt=""
          />
        </div>
        <div className="overflow-hidden min-w-[336px] p-0 flex flex-col items-start font-quicksand gap-7">
          <div className="max-w-[916px] font-quicksand font-semibold text-3xl text-[#252525]">{blogData.title}</div>
          <div className="max-w-[916px] max-h-[350px] font-medium text-lg text-[#252525] overflow-y-scroll">{parse(html)}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogView;
