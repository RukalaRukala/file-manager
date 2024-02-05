import {appRun} from "./app/app.js";
import {currentFolder, sayHello, setUsername} from "./app/utils/naming.js";
import * as os from "os";
import {failOperation} from "./app/utils/failOperation.js";

(async () => {
    try {
        setUsername(process.argv
            .slice(2)[0]
            .slice(131));

        process.stdout.write(sayHello());
        process.chdir(os.homedir());
        process.stdout.write(currentFolder());
    } catch (err) {
        failOperation('Operation failed');
        process.exit();
    }

    await appRun();
})();

