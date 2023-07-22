import React from "react";
import {motion} from 'framer-motion';
import getBlogData from "../../utils/getBlogData";

const BlogCard = ({title, desc, slug, thumb, setBlogData}) => {
    const variants = {
        initial : {color : "#252525"},
        hover: { color : "#FFB41D"},
      }
    const lift = {
        initial : {opacity : 0},
        hover : { "box-shadow" : "2px 6px 20px rgba(0, 0, 0, 0.08)"},
    }

    const handleClick = async () => {
        const data = await getBlogData(slug);
        console.log(data);
        setBlogData(data.data.blog)
    }

    return(
        <motion.div whileHover="hover" initial="initial" variants={lift} onClick={handleClick} animate = {{opacity : 1}} transition={{duration : 0.5, ease : "easeIn"}}
        className="w-[384px] max-h-[364px] bg-[#FFFFFF] border-[#E0E0E0] rounded-2xl pb-5 gap-6 border flex flex-col items-center hover:cursor-pointer">
            <div className="min-w-96 max-h-[172px] border border-[#E0E0E0] rounded-t-2xl overflow-hidden">
                <motion.img className="min-h-full min-w-[384px]" src={thumb} alt="" />
            </div>
            <div className="overflow-hidden min-w-[336px] max-h-[144px] p-0 flex flex-col items-start gap-4 font-quicksand">
                <motion.div variants={variants} className="max-w-[336px] font-semibold text-xl" >{title}</motion.div>
                <div className="max-w-[336px] max-h-[72px] font-medium text-base text-[#3F3F3F]">{desc}</div>
            </div>
        </motion.div>
    )
}

export default BlogCard;