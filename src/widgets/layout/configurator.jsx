import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Switch,
  Typography,
} from "@material-tailwind/react";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setFixedNavbar,
} from "@/context";


export function Configurator() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openConfigurator, fixedNavbar } =
    controller;

  return (
    <aside
      className={`fixed top-0 right-0 z-50 h-screen w-96 bg-white px-2.5 shadow-lg transition-transform duration-300 ${
        openConfigurator ? "translate-x-0" : "translate-x-96"
      }`}
    >
      <div className="flex items-start justify-between px-6 pt-8 pb-6">
        <div>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          onClick={() => setOpenConfigurator(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5" />
        </IconButton>
      </div>
      <div className="py-4 px-6">
      
        <div className="mb-12">
          <div className="flex items-center justify-between py-5">
            <Typography variant="h6" color="blue-gray">
              Navbar Fixed
            </Typography>
            <Switch
              id="navbar-fixed"
              value={fixedNavbar}
              onChange={() => setFixedNavbar(dispatch, !fixedNavbar)}
            />
          </div>
          <hr />

        
        </div>
        <div className="text-center">
          <Typography variant="h6" color="blue-gray">
            Thank you for coming ❤️
          </Typography>
          <div className="mt-4 flex justify-center gap-2">
          <a
              href="https://www.creative-tim.com/product/material-tailwind-dashboard-react?rel=mtdr"
              target="_black"
            >
               <Button
              variant="gradient"
              className="flex items-center gap-2"
            >
              <i className="fa-brands fa-github text-white" />
              Github
            </Button>
            </a>
            <a
              href="https://www.creative-tim.com/product/material-tailwind-dashboard-react?rel=mtdr"
              target="_black"
            >
               <Button
              variant="gradient"
              className="flex items-center gap-2"
            >
              <i className="fa-brands fa-instagram text-white" />
              Instagram
            </Button>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

Configurator.displayName = "/src/widgets/layout/configurator.jsx";

export default Configurator;
