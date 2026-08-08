import React from 'react';

import { Box } from '@chakra-ui/react';

import CustomeDivider from '../components/CustomeDivider';
import CustomHeading from '../components/CustomHeading';
import ProjectCard from '../components/ProjectCard';
import Section from '../components/Section';

const NoteWothyProjects = () => {
    return (
        <Section id="noteworthyprojects">
            <CustomeDivider />
            <CustomHeading heading="Noteworthy Projects" />
            <Box mt={10} display="flex" flexDirection={{ base: 'column', md: 'row' }} gap={{ base: 8, md: 10 }}>
                <ProjectCard
                    heading="Inventory Mangement System"
                    explanation="It is a web app used to track sales and inventory. It enables the ability to perform CRUD (Create, Read, Update, and Delete) operations for monitoring and managing sales and orders"
                    tools={['NodeJS', 'Express', 'EJS', 'Bootstrap']}
                    github="https://github.com/neildc14/Product-Sales-Inventory"
                />
                <ProjectCard
                    heading="Library Management System"
                    explanation="Library management system built using Node.js, Express, EJS, Bootstrap, and Passport.js for user authentication, this system allows to manage library's books, admin, and lending process"
                    tools={['NodeJS', 'Express', 'EJS', 'Bootstrap']}
                    github="https://github.com/neildc14/library-management-system"
                />
                <ProjectCard
                    heading="To-do App"
                    explanation="A To-Do app built using Firebase for the backend, allowing users to create and manage tasks, built using front-end technologies like HTML, CSS, JavaScript, and using Frontend Mentor's design"
                    tools={['Firebase', 'HTML', 'CSS', 'Bootstrap']}
                    github="https://github.com/neildc14/todo-app-firebase"
                />
            </Box>
        </Section>
    );
};

export default NoteWothyProjects;
