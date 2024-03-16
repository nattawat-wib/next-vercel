"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { Button, Link } from "@nextui-org/react";
import Navbar from "./components/navbar";
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faMobile,
    faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Typewriter from "typewriter-effect";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <section className="container sm px-6 mx-auto">
                <Typewriter
                    options={{
                        strings: ["Hello", "World"],
                        autoStart: true,
                        loop: true,
                    }}
                />
                <Button color="warning" variant="solid">
                    Button
                </Button>
            </section>
            <section className="">About me</section>
            <section className="">Skill</section>
            <section className="">
                Contact
                <FontAwesomeIcon icon={faMobileScreen} />
                <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faLinkedin} />
            </section>
        </main>
    );
}
