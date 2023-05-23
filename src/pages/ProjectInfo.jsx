import React from "react";
import banner from "../images/br-project2.png";
import img from "../images/1.png";
import color from "../data/color";
import project from "../data/project";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import { ArrowRight, ArrowSquareOut, PlayCircle } from "phosphor-react";

const ProjectInfo = () => {
    const listAry = [
        {
            txt: "customer",
            txt2: "david warner",
        },
        {
            txt: "category",
            txt2: "warehouse transportation",
        },
        {
            txt: "date",
            txt2: "12 december, 2022",
        },
        {
            txt: "status",
            txt2: "completed",
        },
        {
            txt: "tags",
            txt2: "life style travel, best delivery",
        },
    ];

    const list = listAry.map((item, idx) => (
        <div key={idx} className="flex items-center gap-4">
            <div className="flex gap-2 w-1/3 md:w-auto">
                <p className=" font-medium">{item.txt}</p>
                <span>:</span>
            </div>
            <p>{item.txt2}</p>
        </div>
    ));

    const list2Ary = [
        { txt: "national customer service center - 24 hours a day." },
        { txt: "online shipping navigator lets you quote, book, and track shipments " },
        { txt: "your logistics needs are at thr heart of our business" },
        { txt: "very carefull handling of valueable goods" },
        { txt: "time saving and convenient transportation service in your area" },
    ];

    const list2 = list2Ary.map((item, idx) => (
        <div key={idx} className="flex items-center gap-4 font-medium capitalize">
            <ArrowRight size={16} color="#000000" />
            <p>{item.txt}</p>
        </div>
    ));

    const grid = project.slice(0, 3).map((item, idx) => (
        <div key={idx} className=" relative w-fit group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5/6 w-5/6 hidden bg-[#1c1f35]/80 group-hover:flex items-center justify-center">
                <ArrowSquareOut size={50} color="#fdaf3b" />
            </div>
            <img src={item.img} alt="news" />
        </div>
    ));

    return (
        <div>
            <Banner img={banner} txt={"warehouse transportation"} info={"air cargo transportataion"} />
            <div style={{ background: color.grayBg }} className="h-full py-4 md:py-8 lg:py-12">
                <div className="gap-8 mx-auto capitalize w-11/12 space-y-4 md:flex md:items-center md:space-y-0 lg:w-3/4">
                    <div className="lg:w-3/4">
                        <img className="w-full object-cover" src={img} alt="project detail"/>
                    </div>
                    <div className="w-full">
                        <p className=" font-bold text-xl text-center md:text-left">project details</p>
                        <div className="mt-4 space-y-4">{list}</div>
                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto lg:w-3/4">
                <div className="my-8 space-y-4">
                    <p className=" text-2xl font-bold capitalize">wharehouse transportation</p>
                    <p className=" text-sm text-[#666c89]">Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed, faucibus vel elit Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere.</p>
                    <div className=" space-y-4">{list2}</div>
                </div>
                <div className="my-8 space-y-4">
                    <p className=" text-2xl font-bold capitalize">our project transportation</p>
                    <p className=" text-sm text-[#666c89]">Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed, faucibus vel elit Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere.</p>
                    <div style={{backgroundImage: `url(${img})`}} className="h-[50vh] w-full bg-cover bg-no-repeat bg-bottom relative">
                        <div className="absolute top-1/2 left-1/2 border-2 border-white/40 bg-white/5 rounded-full">
                            <PlayCircle className="m-2" size={30} color="#ffffff" weight="fill"/>
                        </div>
                    </div>
                </div>
                <div className="my-8 space-y-4">
                    <p className=" text-2xl font-bold capitalize">related project</p>
                    <div className="hidden lg:grid grid-cols-3 gap-4 my-8">{grid}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectInfo;
