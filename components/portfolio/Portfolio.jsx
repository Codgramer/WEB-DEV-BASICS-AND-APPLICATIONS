import "./portfolio.scss"
import { motion, useScroll, useSpring } from "framer-motion";


const items = [
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/6119581/pexels-photo-6119581.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"hfhsfhbhjerfhrrrerhbeh.",
    },
    {
        id:1,
        title:"Next.js Blog",
        img:"https://images.pexels.com/photos/19551874/pexels-photo-19551874/free-photo-of-golden-retriever-in-christmas-headband.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"hfhsfhbhjerfhrrrerhbeh.",
    },
    {
        id:1,
        title:"Vanilla JS App",
        img:"https://images.pexels.com/photos/5723989/pexels-photo-5723989.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"hfhsfhbhjerfhrrrerhbeh.",
    },
    {
        id:1,
        title:"Music App",
        img:"https://images.pexels.com/photos/5623629/pexels-photo-5623629.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"hfhsfhbhjerfhrrrerhbeh.",
    },
];

const Single = ({item}) =>{
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        //offset: ["start start", "end start"]
    });

    const y = useTransform(scrolProgress, [0,1], [-300,300]);

    return (
      <section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                  <img src="item.img" alt="" />
                </div>
              <motion.div className="textcontainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
              </motion.div>
            </div>
        </div>
        
      </section>
    );
};
const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["end end", "start start"],
    });
    
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div  style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio