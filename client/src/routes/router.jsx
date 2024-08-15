import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import Add from "../pages/Dashboard/Add/Add";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import AddPet from "../pages/AddPet/AddPet"
import MyPet from "../pages/MyPet/MyPet";
import PetListing from "../pages/PetListing/PetListing";
import PetDetails from "../pages/PetDetails/PetDetails";
import CategoryPetListing from "../pages/CategoryPetListing/CategoryPetListing";
import DonationPage from "../pages/DonationPage/DonationPage";
import SuccessPage from "../pages/DonationPage/SuccessPage"
import CancelPage from "../pages/DonationPage/CancelPage"
import CampaignPage from "../pages/CampaignPage/CampaignPage";
import ProtectedRoute from "./ProtectedRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/listing",
                element: <PetListing></PetListing>
            },
            {
                path: "pets/:id",
                element: <PetDetails></PetDetails>
            },
            {
                path: "/user-dashboard",
                element: <ProtectedRoute><UserDashboard></UserDashboard></ProtectedRoute>,
                children: [
                    {
                        path: "/user-dashboard/add",
                        element: <ProtectedRoute><AddPet></AddPet></ProtectedRoute>
                    },
                    {
                        path: "/user-dashboard/mypet",
                        element: <ProtectedRoute><MyPet></MyPet></ProtectedRoute>
                    }
                ]
            },
            {
                path: "/category/:category",
                element: <CategoryPetListing></CategoryPetListing>
            },
            {
                path: "/donation",
                element: <DonationPage></DonationPage>
            },
            {
                path: "/success",
                element: <SuccessPage></SuccessPage>
            },
            {
                path: "/cancel",
                element: <CancelPage></CancelPage>
            },
            {
                path: "/campaigns",
                element: <CampaignPage></CampaignPage>
            }

        ]
    },
    {
        path: "/admin",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/admin/add",
                element: <Add></Add>
            }
        ]
    }
])
export default router