import {withContext} from "../withHelpers/withContext";
import {Home} from "../../Pages/HomePage/HomePage";
import {UserBlock} from "../User/User";
import {SearchBlock} from "../../Pages/SearchPage/SearchPage";
import {IGitApiService} from "../../services/interfaces";

export const mapHomePageMethodsToProps = ({ getUsers }: IGitApiService) => {
    return {
        getData: getUsers
    }
}

export const mapSearchPageMethodsToProps = ({ searchUsers }: IGitApiService) => {
    return {
        getData: searchUsers
    }
}

export const mapUserMethodsToProps = ({ getUserDetails }: IGitApiService) => {
    return {
        getData: getUserDetails
    }
}

export const HomePage = withContext(mapHomePageMethodsToProps)(Home);
export const SearchPage = withContext(mapSearchPageMethodsToProps)(SearchBlock);
export const User = withContext(mapUserMethodsToProps)(UserBlock);