import { Shared } from "../../shared-types/index"
import { ipcRenderer } from "electron";
import { Config } from "nodejs-git-json/build/types/config.types";
import { GitLogDates, GitLogPagination } from "nodejs-git-json/build/types/git_types";

export const getApiHandlers = (): Shared.handlers => {
    return {
        // Alias
        git_log_short: (path: string, config: Config) => ipcRenderer.send('git_log_short', path, config),
        git_log: (path: string, config: Config) => ipcRenderer.send('git_log', path, config),
        git_status: (path: string, config: Config) => ipcRenderer.send('git_status', path, config),
        git_reference: (path: string, config: Config) => ipcRenderer.send('git_reference', path, config),
        git_users: (path: string, config: Config) => ipcRenderer.send('git_users', path, config),
        git_configs: (path: string, config: Config) => ipcRenderer.send('git_configs', path, config),
        git_stash: (path: string, config: Config) => ipcRenderer.send('git_stash', path, config),
    
        // Helpers
        git_log_commit: (path: string, sha: string, config: Config) => ipcRenderer.send('git_log_commit', path, sha, config),
        git_log_pagination: (path: string, gitLogPagination: GitLogPagination, config: Config) => ipcRenderer.send('git_log_pagination', path, gitLogPagination, config),
        git_log_dates: (path: string, gitLogDates: GitLogDates, config: Config) => ipcRenderer.send('git_log_dates', path, gitLogDates, config),
        git_log_file: (path: string, filePath: string, config: Config) => ipcRenderer.send('git_log_file', path, filePath, config),
        git_log_folder: (path: string, folderPath: string, gitLogPagination: GitLogPagination, config: Config) => ipcRenderer.send('git_log_folder', path, folderPath, gitLogPagination, config),
    
        // Repo
        git_repo_commits_count: (path: string = './', config: Config) => ipcRenderer.send('git_repo_commits_count', path, config),
        git_repo_users_commit_count: (path: string = './', config: Config) => ipcRenderer.send('git_repo_users_commit_count', path, config),
        git_repo_files_count: (path: string = './', config: Config) => ipcRenderer.send('git_repo_files_count', path, config),
        git_repo_files: (path: string = './', config: Config) => ipcRenderer.send('git_repo_files', path, config),
        git_repo_statistics: (path: string = './', config: Config) => ipcRenderer.send('git_repo_statistics', path, config),
        git_repo_grep: (path: string = './', pattern: string, pathspec?: string, config?: Config) => ipcRenderer.send('git_repo_grep', path, pattern, pathspec, config),
        git_repo_files_size: (path: string = './', config: Config) => ipcRenderer.send('git_repo_files_size', path, config),
        git_repo_unpack: (path: string = './', config: Config) => ipcRenderer.send('git_repo_files_size', path, config),
    
    }
}
