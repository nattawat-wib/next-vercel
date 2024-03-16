import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Switch,
    Link,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";

export default function () {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const SideNavbar = styled.div`
        position: absolute;
        background-color: rgba(220, 220, 220, .8);
        backdrop-filter: blur(10px);
        top: 0;
        color: ${isSideNavOpen ? "red" : "blue"};
        left: ${isSideNavOpen ? "0" : "0"};
        width: calc(100% - 165px);
        height: 100%;
        transition: left 2s ease, color 2s;
        z-index: 9999;
        padding: 2rem
    `;

    const CustomNavbar = styled(Navbar)`
        background-color: rgba(220, 220, 220, 0.5);

        & > header {
            max-width: 1536px;
        }
    `;

    return (
        <div>
            <SideNavbar>
                <h2> nattawat wib </h2>
                <ul>
                    <li>
                        <Link href="#" color="foreground">
                            {" "}
                            About{" "}
                        </Link>
                    </li>
                    <li>
                        <Link href="#" color="foreground">
                            {" "}
                            About{" "}
                        </Link>
                    </li>
                    <li>
                        <Link href="#" color="foreground">
                            {" "}
                            About{" "}
                        </Link>
                    </li>
                    <li>
                        <Link href="#" color="foreground">
                            {" "}
                            About{" "}
                        </Link>
                    </li>
                </ul>
            </SideNavbar>
            <CustomNavbar onMenuOpenChange={setIsOpen}>
                <NavbarBrand>nattawat wib</NavbarBrand>
                <NavbarContent justify="center" className="hidden md:flex">
                    <NavbarItem>
                        <Link href="#" color="warning">
                            {" "}
                            Home{" "}
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" color="foreground">
                            {" "}
                            About{" "}
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" color="foreground">
                            {" "}
                            Project{" "}
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" color="foreground">
                            {" "}
                            Contact{" "}
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end" className="gap-1">
                    <NavbarItem>
                        <Switch
                            defaultSelected
                            size="lg"
                            color="warning"
                            startContent={<FontAwesomeIcon icon={faMoon} />}
                            endContent={<FontAwesomeIcon icon={faSun} />}
                        />
                        {/* <Button
                        isIconOnly
                        color="warning"
                        variant="light"
                        radius="full"
                        className="text-xl"
                        onClick={() => setIsDarkMode((prev) => !prev)}
                    >
                        {isDarkMode ? (
                            <FontAwesomeIcon icon={faSun} />
                        ) : (
                            <FontAwesomeIcon icon={faMoon} />
                        )}
                    </Button> */}
                    </NavbarItem>
                    <NavbarItem className="bordered">
                        <Button
                            isIconOnly
                            variant="light"
                            radius="full"
                            color="warning"
                            onClick={() => setIsSideNavOpen((prev) => !prev)}
                        >
                            <FontAwesomeIcon
                                icon={isSideNavOpen ? faBars : faXmark}
                                className="text-xl"
                            />
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </CustomNavbar>
        </div>
    );
}
