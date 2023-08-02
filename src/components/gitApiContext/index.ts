import {createContext} from "react";
import {IGitApiService} from "../../services/interfaces";

export const GitApiContext = createContext<IGitApiService | null>(null);