module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/juniorguita/react-app",
    plugins: [
        "@semantic-release/commit-analyzer",
        ["@semantic-release/github", {
            assets: [
                {path: "build.zip", label: "Build"},
                {path: "coverage.zip", label: "Coverage"}
            ]
        }],
        "@semantic-release/release-notes-generator"
    ]
}