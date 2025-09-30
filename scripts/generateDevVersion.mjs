import copyfiles from "copyfiles";


const TEST_VAULT_PATH =
	"../my_quartz-syncer/content/.obsidian/plugins/my_obsidian-plantuml/";


const FILES_TO_COPY = ["main.js", "manifest.json", "styles.css"];
console.log("Copying generated files to test vault");
// copy generated files to test vault
copyfiles([...FILES_TO_COPY, TEST_VAULT_PATH], {}, () => {});
