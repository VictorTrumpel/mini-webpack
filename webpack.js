const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator");

const visetedFilesSet = new Set();

function buildBundle(filePath) {
  if (visetedFilesSet.has(filePath)) return "";

  visetedFilesSet.add(filePath);

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const ast = parser.parse(fileContent, { sourceType: "module" });

  let fullPeerContent = "";

  traverse(ast, {
    ImportDeclaration(tree) {
      const node = tree.node;

      const currentDir = path.dirname(filePath); // vtrumpel/../src/

      const peerDependcyFilePath = path.resolve(
        currentDir,
        `${node.source.value}.js`
      );

      const peerFileContent = buildBundle(peerDependcyFilePath); // utilA.js

      fullPeerContent += peerFileContent + "\n";

      return tree.remove();
    },
  });

  const fileContentWithoutImport = generator.default(ast, {}, fileContent);

  return fullPeerContent + fileContentWithoutImport.code;
}

const entryPoint = path.resolve(__dirname, "src", "index.js");

const bundle = buildBundle(entryPoint);

fs.writeFileSync(path.resolve(__dirname, "bundle.js"), bundle);
