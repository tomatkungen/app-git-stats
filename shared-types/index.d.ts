import { Config } from "nodejs-git-json/build/types/config.types";
import { GitLogDates, GitLogPagination } from "nodejs-git-json/build/types/git_types";

export declare namespace Shared {
    type handlers = {
        // Alias
        git_log_short: (path: string, config: Config) => void,
        git_log: (path: string, config: Config) => void,
        git_status: (path: string, config: Config) => void,
        git_reference: (path: string, config: Config) => void,
        git_users: (path: string, config: Config) => void,
        git_configs: (path: string, config: Config) => void,
        git_stash: (path: string, config: Config) => void,

        // Helpers
        git_log_commit: (path: string, sha: string, config: Config) => void,
        git_log_pagination: (path: string, gitLogPagination: GitLogPagination, config: Config) => void,
        git_log_dates: (path: string, gitLogDates: GitLogDates, config: Config) => void,
        git_log_file: (path: string, filePath: string, config: Config) => void,
        git_log_folder: (path: string, folderPath: string, gitLogPagination: GitLogPagination, config: Config) => void,

        // Repo
        git_repo_commits_count: (path: string, config: Config) => void,
        git_repo_users_commit_count: (path: string, config: Config) => void,
        git_repo_files_count: (path: string, config: Config) => void,
        git_repo_files: (path: string, config: Config) => void,
        git_repo_statistics: (path: string, config: Config) => void,
        git_repo_grep: (path: string, pattern: string, pathspec?: string, config?: Config) => void,
        git_repo_files_size: (path: string, config: Config) => void,
        git_repo_unpack: (path: string, config: Config) => void

    }
}