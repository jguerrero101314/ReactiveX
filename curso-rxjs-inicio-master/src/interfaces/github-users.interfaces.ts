import { GithubUser } from "./githu-user.interfaces";

export interface GithubUsersResp {
    total_count:         number;
    incomplete_results:  boolean;
    items:               GithubUser[];
}