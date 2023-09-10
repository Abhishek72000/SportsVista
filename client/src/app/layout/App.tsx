import { DarkMode } from "@mui/icons-material";
import { Container, CssBaseline, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css';
import { useStoreContext } from "../context/StoreContext";
import agent from "../api/agent";
import { getCookie } from "../util/util";
import LoadingComponents from "./LoadingComponents";
import { useAppDispatch } from "../store/configureStore";
import { fetchBasketAsync, setBasket } from "../../features/basket/basketSlice";
import { fetchCurrentUser } from "../../features/account/accountSlice";
import HomePage from "../../features/home/HomePage";
import { ThemeProvider } from "@emotion/react";
import createTheme from "@mui/material/styles/createTheme";




function App() {
  const location = useLocation();

  const dispatch =useAppDispatch();
  const[loading,setLoading]=useState(true);
  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp])   


  const [darkMode ,setDarkMode] = useState(false);
  const paletteType= darkMode ? 'dark' : 'light';

  const theme =createTheme({
    palette: {
      mode:paletteType,
      background:{
        default: paletteType === 'light' ? 'white' : '#121212'
      }
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkMode)  ;
    
  }
  // if(loading) return<LoadingComponents message="Initialising"/>
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
      <CssBaseline />
      {/* <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Container>
          <Outlet />
        </Container> */}
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        {loading ? <LoadingComponents message="Initialising app..." />
          : location.pathname === '/' ? <HomePage />
          : <Container sx={{mt: 4}}>
              <Outlet />
            </Container>
      }
        
      
    </ThemeProvider>
  );
}

export default App;
