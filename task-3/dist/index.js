"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Функция для поиска файлов
function searchFiles(directory, searchTerm, searchContent = false) {
    fs_1.default.readdir(directory, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error(`Ошибка чтения директории: ${err.message}`);
            return;
        }
        files.forEach(file => {
            const filePath = path_1.default.join(directory, file.name);
            if (file.isDirectory()) {
                searchFiles(filePath, searchTerm, searchContent);
            }
            else if (file.isFile()) {
                if (file.name.includes(searchTerm)) {
                    console.log(`Найден файл: ${filePath}`);
                }
                if (searchContent && file.name.endsWith('.txt')) {
                    fs_1.default.readFile(filePath, 'utf-8', (err, data) => {
                        if (err) {
                            console.error(`Ошибка чтения файла ${filePath}: ${err.message}`);
                            return;
                        }
                        if (data.includes(searchTerm)) {
                            console.log(`Найден файл с содержимым: ${filePath}`);
                        }
                    });
                }
            }
        });
    });
}
// Основная функция
function main() {
    const directory = './';
    const searchTerm = 'search';
    const searchContent = true;
    searchFiles(directory, searchTerm, searchContent);
}
main();
