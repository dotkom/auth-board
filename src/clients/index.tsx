import { Button } from "@dotkomonline/design-system";
import { getCreateAppUrl } from "common/utils/urls";
import Link from "next/link";
import React from "react";
import Header from "../common/components/Header";
import ClientList from "./components/List";

const Overview: React.FC = () => (
    <>
        <Header />
        <Link {...getCreateAppUrl()} passHref={true}>
            <Button>Registrer ny applikasjon</Button>
        </Link>
        <ClientList />
    </>
)

export default Overview;