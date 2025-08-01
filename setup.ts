import fs from "node:fs"

async function setup() {
    console.log("Test)
    if(fs.existsSync('allure-results')){
        fs.rmdirSync('allure-results', { recursive: true});
    }
    if(fs.existsSync('allure-report')){
        fs.rmdirSync('allure-report', { recursive: true});
    }
}

export default setup
