"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import "../styles/commn.css"

interface ProjectCardProps {
    title: string;
    techUsed: string;
    imageUrl: string;
    progress: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, techUsed, imageUrl, progress }) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
    });

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5 }}
            className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-3 mb-5"
        >
            <div className="bg-gray-100 rounded-lg overflow-hidden">
                <Image
                    className="rounded w-full object-cover object-center mb-6"
                    src={imageUrl}
                    alt="content"
                    height={200}
                    width={250}
                />
                <div className='overflow-hidden '>
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Tech Used</h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4 projecttitle">{title}</h2>
                    <div className="flex flex-col justify-start pt-3  gap-2">
                        <div className="bg-gray-300 h-2 rounded-full">
                            <motion.div
                                className="bg-green-600 h-full rounded-full"
                                style={{ width: `${progress}%` }}
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 1 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;


