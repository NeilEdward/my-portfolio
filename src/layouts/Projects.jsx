import React from 'react';

import { Box } from '@chakra-ui/react';

import inventory from '../assets/images/inventory.png';
import isquizzy from '../assets/images/isquizzy.png';
import mailbutler from '../assets/images/mailbutler1.png';
import recifree from '../assets/images/recifree1.png';
import shrinky from '../assets/images/shrinky.png';
import webarms from '../assets/images/webarms.png';
import CustomeDivider from '../components/CustomeDivider';
import CustomHeading from '../components/CustomHeading';
import ProjectCard from '../components/ProjectCard';
import Section from '../components/Section';

const Projects = () => {
    return (
        <Section id="projects">
            <CustomeDivider />
            <CustomHeading heading="Projects" />
            <Box mt={10} display="flex" flexDirection="column" gap={{ base: 8, md: 10 }}>
                <div data-aos="fade-up" data-aos-duration={500} data-aos-anchor-placement="top-bottom">
                    <ProjectCard
                        image={webarms}
                        heading="Ambulance_Requesting_And_Monitoring_System"
                        explanation="Our capstone project digitizes ambulance requests and integrates ambulance monitoring using websockets and the geolocation API."
                        tools={['MERN Stack', 'REST API', 'Chakra UI', 'Socket.io', 'Leaflet Map Library']}
                        link="https://staging-capstone.netlify.app/"
                        github="https://github.com/neildc14/capstone"
                    />
                </div>
                <div data-aos="fade-up" data-aos-duration={500} data-aos-anchor-placement="top-bottom">
                    <ProjectCard
                        image={shrinky}
                        heading="Shrinky"
                        explanation="This web app offers a simple solution to shorten long and complex URLs, making them more manageable and shareable."
                        tools={['MongoDB', 'Express', 'React', 'NodeJS', 'REST API', 'Chakra UI']}
                        link="https://shrinky.netlify.app"
                        github="https://github.com/neildc14/shrinky"
                    />
                </div>
                <div data-aos="fade-up" data-aos-duration={500} data-aos-anchor-placement="top-bottom">
                    <ProjectCard
                        image={inventory}
                        heading="Inventory_System"
                        explanation="It is a web app used to manage sales and inventory. It enables the ability to perform CRUD operations for monitoring and managing sales and orders"
                        tools={['NodeJS', 'Express', 'EJS', 'Bootstrap', 'REST API']}
                        link="https://precious-shop.onrender.com"
                        github="https://github.com/neildc14/Product-Sales-Inventory"
                    />
                </div>
                <div data-aos="fade-up" data-aos-duration={500} data-aos-anchor-placement="top-bottom">
                    <ProjectCard
                        image={isquizzy}
                        heading="isQUIZzy"
                        explanation="This web app uses the Trivia API to provide multiple choice trivia questions,including both procedurally generated and user generated options."
                        tools={['React', 'trivia API', 'axios']}
                        link="https://isquizzy.netlify.app"
                        github="https://github.com/neildc14/quiz-app"
                    />
                </div>
                <div data-aos="fade-up" data-aos-duration={500} data-aos-anchor-placement="top-bottom">
                    <ProjectCard
                        image={recifree}
                        heading="recifree"
                        explanation="This project utilizes the EDAMAM Recipe Search API to provide access to millions of web recipes."
                        tools={['React', 'recipe search API', 'axios', 'react-query', 'tailwind CSS']}
                        link="https://recifree.netlify.app/"
                        github="https://github.com/neildc14/recifree"
                    />
                </div>
            </Box>
        </Section>
    );
};

export default Projects;
