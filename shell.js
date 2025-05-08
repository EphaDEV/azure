const commands = {
    echo: (args) => args.join(' '),
    cd: (args) => {
        if (args.length === 0) return "The directory name is invalid.";
        return `Changed directory to ${args.join(' ')}`;
    },
    cls: () => {
        outputElement.innerHTML = '';
        return '';
    },
    dir: () => {
        return [
            " Volume in drive C has no label.",
            " Volume Serial Number is 1234-5678",
            "",
            " Directory of C:\\Users\\isv61",
            "",
            "01/16/2025  08:00 AM    <DIR>          .",
            "01/16/2025  08:00 AM    <DIR>          ..",
            "01/16/2025  08:00 AM             1,234 example.txt",
            "01/16/2025  08:00 AM             5,678 anotherfile.doc",
            "               2 File(s)          6,912 bytes",
            "               2 Dir(s)  100,000,000,000 bytes free"
        ].join('\n');
    },
    help: () => {
        return [
            "Supported commands:",
            "  echo [text]       - Displays text on the screen.",
            "  cd [directory]    - Changes the current directory.",
            "  cls               - Clears the screen.",
            "  dir               - Lists the directory contents.",
            "  help              - Displays this help message.",
            "  date              - Displays or sets the system date.",
            "  time              - Displays or sets the system time.",
            "  mkdir [dir]       - Creates a new directory.",
            "  del [file]        - Deletes a file.",
            "  copy [src] [dst]  - Copies a file from source to destination.",
            "  move [src] [dst]  - Moves a file from source to destination.",
            "  rename [old] [new] - Renames a file.",
            "  type [file]       - Displays the contents of a file.",
            "  tasklist          - Lists currently running processes.",
            "  taskkill [pid]    - Terminates a process by PID.",
            "  systeminfo        - Displays system information.",
            "  ping [host]       - Pings a network host.",
            "  ipconfig          - Displays network configuration.",
            "  set               - Displays or sets environment variables.",
            "  pause             - Pauses the command line until a key is pressed.",
            "  cls               - Clears the screen.",
            "  ver               - Displays OS version.",
            "  shutdown          - Shuts down the system.",
            "  exit              - Exits the terminal.",
            "  tree              - Displays a graphical directory tree.",
            "  copy con [file]   - Creates or appends a file from input.",
            "  chkdsk            - Checks the disk for errors.",
            "  format [drive]    - Formats a drive.",
            "  fc [file1] [file2] - Compares two files and displays differences.",
            "  attrib            - Displays or changes file attributes.",
            "  touch [file]      - Creates an empty file or updates timestamp.",
            "  clearenv          - Clears all environment variables.",
            "  hostname          - Displays or sets the hostname.",
            "  netstat           - Displays network connections.",
            "  nslookup [host]   - Queries DNS for information about a host.",
            "  curl [url]        - Fetches content from a URL.",
            "  wget [url]        - Downloads content from a URL.",
            "  sudo [command]    - Executes a command with superuser privileges.",
            "  setenv [var] [val] - Sets an environment variable.",
            "  getenv [var]      - Displays an environment variable value.",
            "  clearcache        - Clears the browser or system cache.",
            "  grep [pattern] [file] - Searches for a pattern in a file.",
            "  history           - Displays the command history.",
            "  man [command]     - Displays the manual for a command.",
            "  sudo shutdown     - Shuts down the system with root privileges.",
            "  shutdown /r       - Restarts the system.",
            "  taskmgr           - Opens the Task Manager."
        ].join('\n');
    },
    date: () => {
        return new Date().toLocaleDateString();
    },
    time: () => {
        return new Date().toLocaleTimeString();
    },
    mkdir: (args) => {
        if (args.length === 0) return "The system cannot find the path specified.";
        return `Directory created: ${args.join(' ')}`;
    },
    del: (args) => {
        if (args.length === 0) return "The system cannot find the file specified.";
        return `File deleted: ${args.join(' ')}`;
    },
    copy: (args) => {
        if (args.length < 2) return "The syntax of the command is incorrect.";
        return `File copied from ${args[0]} to ${args[1]}`;
    },
    move: (args) => {
        if (args.length < 2) return "The syntax of the command is incorrect.";
        return `File moved from ${args[0]} to ${args[1]}`;
    },
    rename: (args) => {
        if (args.length < 2) return "The syntax of the command is incorrect.";
        return `File renamed from ${args[0]} to ${args[1]}`;
    },
    rsd: (args) => {
        if (args.length !== 1 || !args[0].includes("-")) return "The syntax of the command is incorrect.";
        
        let range = args[0].split("-").map(num => parseInt(num, 10));
        if (range.some(isNaN) || range.length !== 2) return "Invalid range. Use: rsd min-max";
        
        let min = Math.min(...range);
        let max = Math.max(...range);
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        
        return `${randomNum}`;
    },
    
    type: (args) => {
        if (args.length === 0) return "The system cannot find the file specified.";
        return `Contents of ${args[0]}: \nThis is a mock file content.`;
    },
    tasklist: () => {
        return [
            "Task List:",
            "  PID    Name                    Status",
            "                                        ",
            "  1234   Notepad.exe             Running",
            "  5678   xxe.csf                 Running",
            "  9101   cli.xxe                 Running",
            "  9102   task_manager.xxe        Running",
            "  9103   stingray.xxe            Running",
            "  9104   rdc.xxe                 Running",
            "  9105   sysvm.xxe               Running",
            "  9106   setings.xxe             Running",
            "  9107   protection.xxe          Running",
            "  9108   chromium.xxe            Running",
            "  9109   xsnetwork.xxe           Running",
            "  9110   snoopy.xxe              Running",
            "  9101   xks.xxe                 Running",
            "  9101   vip.xxe                 Running",
            "  9101   KeePass.xxe             Running",
            "  9101   VS20222.xxe             Running",
            "  9101   izvin.xxe               Running",
            "  9101   7zip.xxe                Running",
            "  9101   Nmap.xxe                Running",
            "  9101   drivers.csf             Running",
            "  9101   kernel.csf              Running",
            "  9101   lx_base.csf             Running",
            "  9101   wifi-sng.csfp           Running",
            "  9101   xwindowsys.csf          Running",
            "  9101   gc_mng.csf              Running",
            "  9101   makoss.xxe              Running",
            "  9101   wraith.xxe              Running",
            "  9101   isv61e.sl               Running",
            "  9101   isv61.sl                Running",
            "  9101   fira_prs.xxe            Running",
            "  1234   Notepad.exe             Running",
            "  5678   xxe.csf                 Running",
            "  9101   cli.xxe                 Running",
            "  9102   task_manager.xxe        Running",
            "  9103   stingray.xxe            Running",
            "  9104   rdc.xxe                 Running",
            "  9105   sysvm.xxe               Running",
            "  9106   setings.xxe             Running",
            "  9107   protection.xxe          Running",
            "  9108   chromium.xxe            Running",


        ].join('\n');
    },
    taskkill: (args) => {
        if (args.length === 0) return "No process ID specified.";
        return `Process with PID ${args[0]} terminated.`;
    },
    systeminfo: () => {
        return [
            "System Information:",
            "  OS: Sierra 11 Pro",
            "  Version: 1.0.1600.4",
            "  RAM: 16GB",
            "  CPU: Intel Core i7",
            "  Disk: 1TB SSD"
        ].join('\n');
    },
    ping: (args) => {
        if (args.length === 0) return "Ping: No host specified.";
        return `Pinging ${args[0]} with 32 bytes of data:\nReply from ${args[0]}: bytes=32 time=12ms TTL=64`;
    },
    ipconfig: () => {
        return [
            "",
            "",
            "Ethernet adapter Ethernet:",
            "   Connection-specific DNS Suffix  . : home",
            "   IPv4 Address. . . . . . . . . . . : 192.168.1.101",
            "   Subnet Mask . . . . . . . . . . . : 255.255.255.0",
            "   Default Gateway . . . . . . . . . : 192.168.1.1",
            "",
            "Wireless LAN adapter Wi-Fi:",
            "   Connection-specific DNS Suffix  . : home",
            "   IPv4 Address. . . . . . . . . . . : 192.168.1.102",
            "   Subnet Mask . . . . . . . . . . . : 255.255.255.0",
            "   Default Gateway . . . . . . . . . : 192.168.1.1",
            "",
            "Tunnel adapter Teredo Tunneling Pseudo-Interface:",
            "   Connection-specific DNS Suffix  . : ",
            "   IPv6 Address. . . . . . . . . . . : 2001:0db8:85a3::8a2e:370:7334",
            "   Link-local IPv6 Address . . . . . : fe80::1%13",
            "   Default Gateway . . . . . . . . . : ::"
        ].join('\n');
    },



    hackedgmailTXT: () => {
        return [
            "",
            "Hacked Gmail Accounts:",
            "  jason.miller92@gmail.com  ->  Qwerty!23",
            "  emily_roberts84@gmail.com  ->  9x!aKp$73",
            "  sbdr2314@gmail.com  ->  hunter2",
            "  tommyx9083@gmail.com  ->  d3lt4F0rce!!",
            "  lucas_omega@gmail.com  ->  p@ssw0rd123",
            "  maya.chang21@gmail.com  ->  4u8mF!oP",
            "  rx83jkl9@gmail.com  ->  Zyx$pl7m2",
            "  kevin_shade08@gmail.com  ->  b32bomb^^",
            "  hailey.star92@gmail.com  ->  Summer2024!",
            "  xzrb99@gmail.com  ->  4eR^g7Jm",
        ].join('\n');
    },
    
    nmap: () => {
        return [
            "",
            "Nmap 7.94 ( https://nmap.org )",
            "Usage: nmap [Scan Type(s)] [Options] {target specification}",
            "",
            "TARGET SPECIFICATION:",
            "  Can pass hostnames, IP addresses, networks, etc.",
            "  Example: nmap scanme.nmap.org, nmap 192.168.1.1, nmap 10.0.0.0/24",
            "  -iL <inputfilename>: Input from list of hosts/networks",
            "  -iR <num hosts>: Choose random targets",
            "  --exclude <host1[,host2][,host3],...>: Exclude hosts/networks",
            "  --excludefile <filename>: Exclude list from file",
            "",
            "SCAN TECHNIQUES:",
            "  -sS: TCP SYN scan (default)",
            "  -sT: TCP connect scan",
            "  -sU: UDP scan",
            "  -sN/-sF/-sX: TCP NULL, FIN, and Xmas scans",
            "  -sA: TCP ACK scan",
            "  -sP: Ping scan",
            "  -sV: Version detection",
            "  -O: OS detection",
            "",
            "PORT SPECIFICATION:",
            "  -p <port ranges>: Only scan specified ports",
            "  Example: -p 22,80,443 or -p 1-65535",
            "",
            "SERVICE/VERSION DETECTION:",
            "  -sV: Probe open ports to determine service/version info",
            "  --version-intensity <level>: Set version scan intensity (0-9)",
            "  --version-all: Try every single probe",
            "  --version-trace: Show detailed version scan activity",
            "",
            "OS DETECTION:",
            "  -O: Enable OS detection",
            "  --osscan-limit: Limit OS detection to promising targets",
            "  --osscan-guess: Guess OS more aggressively",
            "",
            "OUTPUT OPTIONS:",
            "  -oN <file>: Normal output",
            "  -oX <file>: XML output",
            "  -oG <file>: Grepable output",
            "  -oA <basename>: Output in the three major formats",
            "",
            "Nmap done: Try `nmap --help` for more options."
        ].join('\n');
    },
    

    set: (args) => {
        if (args.length === 0) return "Environment variables: PATH=...";
        return `Set environment variable: ${args.join(' ')}`;
    },
    pause: () => {
        return "Press any key to continue . . .";
    },
    ver: () => {
        return "Sierra 11 Pro [Version 11.0.1100.6]";
    },
    shutdown: () => {
        return "The system is shutting down...";
    },
    exit: () => {
        return "Exiting terminal...";
    },

    quack: () => {
        return "This program executes with polymorphism techniques upon each execution.";
    },

    "copy con": (args) => {
        if (args.length === 0) return "The system cannot find the file specified.";
        return `Enter text to write to ${args[0]} (Ctrl+Z to save):\nText written to ${args[0]}`;
    },
    chkdsk: () => {
        return "Checking disk for errors...\nNo errors found.";
    },
    format: (args) => {
        if (args.length === 0) return "No drive specified.";
        return `Drive ${args[0]} formatted successfully.`;
    },
    fc: (args) => {
        if (args.length < 2) return "The syntax of the command is incorrect.";
        return `Comparing files ${args[0]} and ${args[1]}...\nNo differences found.`;
    },
    attrib: () => {
        return [
            "Attributes of files in C:\\Users\\isv61:",
            "  A  archive.txt",
            "  R  readonly.doc"
        ].join('\n');
    },
    touch: (args) => {
        if (args.length === 0) return "The system cannot find the file specified.";
        return `File ${args[0]} created or timestamp updated.`;
    },
    clearenv: () => {
        return "All environment variables cleared.";
    },
    hostname: (args) => {
        if (args.length === 0) return "Current hostname: mypc";
        return `Hostname set to ${args[0]}`;
    },
    netstat: () => {
        return [
            "Active Connections:",
            "  Proto  Local Address          Foreign Address        State",
            "  TCP    192.168.1.1:80        192.168.1.100:1234     ESTABLISHED",
            "  TCP    192.168.1.1:443       192.168.1.100:5678     TIME_WAIT"
        ].join('\n');
    },
    nslookup: (args) => {
        if (args.length === 0) return "No host specified.";
        
        const getRandomIPv4 = () => 
            `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
    
        const numAddresses = Math.floor(Math.random() * 4) + 1; // Generate 1-4 addresses
        const addresses = Array.from({ length: numAddresses }, getRandomIPv4).join("\nAddresses: ");
    
        return `DNS request for ${args[0]}:\nName: ${args[0]}\nAddresses: ${addresses}`;
    },
    
    
    curl: (args) => {
        if (args.length === 0) return "No URL specified.";
        return `Fetching content from ${args[0]}...\nContent fetched: <HTML content>`;
    },


    
    wget: (args) => {
        if (args.length === 0) return "No URL specified.";
        return `Downloading content from ${args[0]}...\nDownload complete.`;
    },
    sudo: (args) => {
        if (args.length === 0) return "No command specified.";
        return `Executing command with superuser privileges: ${args.join(' ')}`;
    },
    setenv: (args) => {
        if (args.length < 2) return "The syntax of the command is incorrect.";
        return `Environment variable ${args[0]} set to ${args[1]}`;
    },
    getenv: (args) => {
        if (args.length === 0) return "No variable specified.";
        return `Value of ${args[0]}: some_value`;
    },
    clearcache: () => {
        return "Cache cleared.";
    },
    random_ip: (args) => {
        const getRandomInt = (max) => Math.floor(Math.random() * max);
        const generateIP = () => `${getRandomInt(256)}.${getRandomInt(256)}.${getRandomInt(256)}.${getRandomInt(256)}`;
    
        if (args.length === 0) {
            return "Type Province, County, City, Coordinates, Country, Zip Code, or type \"gui\" to open the GUI, or 'exit' to quit:";
        }
    
        let deviceList = [];
        let deviceType = args[0].toLowerCase();
    
        if (deviceType === "gui") {
            return "Starting interface...\nStarting interface..."; // Simulating GUI
        }
    
        if (deviceType === "exit") {
            return "Exiting..."; // Simulate exit
        }
    
        // Simulate device types input (Desktop, Server, Mobile, or all)
        if (deviceType === "all") {
            deviceList = ["Desktop", "Server", "Mobile"];
        } else if (["desktop", "server", "mobile"].includes(deviceType)) {
            deviceList = [deviceType.charAt(0).toUpperCase() + deviceType.slice(1)];
        } else {
            return "Invalid device type. Type 'Desktop', 'Server', 'Mobile', or 'all' to randomize.";
        }
    
        // Simulate random IP generation based on the device type input
        let ipCount = 0;
        let randomIPs = getRandomInt(429496296) + 25;
    
        let ipAddresses = [];
        while (ipCount < randomIPs) {
            let ip = generateIP();
            let device = deviceList[Math.floor(Math.random() * deviceList.length)];
            ipAddresses.push(`${ip} - ${device} - ${args.join(' ')}`);
            ipCount++;
        }
    
        return `Getting ${randomIPs} IP addresses...\n` + ipAddresses.join("\n") + `\nTotal IP addresses found: ${ipCount}`;
    },
    
    grep: (args) => {
        if (args.length < 2) return "The syntax of the command is incorrect.";
        return `Searching for pattern '${args[0]}' in file ${args[1]}... No matches found.`;
    },
    whoami: () => {
        return "Floki";
    },

    splatoon: () => {
        return "Starting Splatoon on Wii U...";
    },

    run: () => {
        return "Glycerine activated on Windows 11 Home DELL (UEFI) in Beijing, China. Reponse (server): Hashcat: Success; ISO: Success; Brick: Last Known;" ;
    },

    mint: () => {
        return "Mint Script xSecureBuild 3.5 cSTA";
    },

    launch: () => {
        return "Starting The Legend of Zelda: Breath of the Wild... because this is your first time launching the game from PC it may take up to 16 minutes to open.";
    },

    env_var: () => {
        return "Installing mint command & control trigger panel... mint command & control trigger panel successfully installed from (Intranet) https://mint.run-var.dev/install/env/cmd-ctrl";
    },

    uname: () => {
        return "Sierra 11 Pro [Version 11.0.1100.6] Pixie Kernel 4.11.2 x86_64";
    },
    

    login: () => {
        return "Logged in as chrisbo on Wii U System Gamepad.";
    },

    wiiU: () => {
        return "Connecting to local Wii U... Connection failed, trying again.... Connection failed, trying again... Your pc has now been connected to your local home Wii U console system.";
    },

    ls_user: () => {
        return [
            "All Users:",
            "                        ",
            "  Floki    Administrator",
            "  BBN      Administrator",
            "  Guest    Restricted   ",
            "  DEV      User         ",
        ].join('\n');
    },
    

    
    
    history: () => {
        return [
            "Command history:",
            "  1. cd Documents",
            "  2. echo Hello World",
            "  3. ping google.com"
        ].join('\n');
    },
    man: (args) => {
        if (args.length === 0) return "No command specified.";
        return `Manual for ${args[0]}: Usage of the ${args[0]} command...`;
    },
    neofetech: () => {
        return [
            `         /\\`,
            `        /__\\      Sierra OS v11`,
            `       /\\  /\\     [ Starshell Build ]`,
            `      /__\\/__\\`,
            `     /\\      /\\`,
            `    /__\\    /__\\`,
            `.`,
            ` OS: Sierra 11 Pro [Version 11.0.1100.6]`,
            ` Host: Shadeware Security GPR PC`,
            ` Kernel: Pixie 4.11.2`,
            ` Uptime: 16h 12m`,
            ` Packages: 7411`,
            ` Shell: Shadeware 4.21.5`,
            ` Resolution: 3840x2160 @ 240Hz`,
            ` WM: Luna 2.16.3`,
            ` Security: Floki AVS, CrowdStrike Falcon Home`,
            ` Memory: 128GB DDR5 @ 6400MHz`,
            ` Disk: 4TB Samsung 990 Pro NVMe SSD`,
            ` CPU: Intel Core i9-13900KS @ 6.0GHz`,
            ` GPU: NVIDIA GeForce RTX 4090 24GB`,
            ` Architecture: 64-bit (x86_64)`,
            ` Network: 5 Gbps (Ethernet)`
        ].join('\n');
    }
    
};






