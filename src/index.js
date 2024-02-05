import {appRun} from "./app/app.js";
import {currentFolder, sayHello, setUsername} from "./app/utils/naming.js";
import * as os from "os";

(async () => {
    setUsername(process.argv
        .slice(2)[0]
        .split('--username=')[1]);

    process.stdout.write(sayHello());
    process.chdir(os.homedir());
    process.stdout.write(currentFolder());

    await appRun();
})();

