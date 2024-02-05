# File manager

<h2 style="color: yellow">Description:</h2>

<h3 style="color: aqua">How to start application</h3>
<p>Enter <span style="color: indianred">npm run start -- --username=your_username</span> without any additional symbols. Replace your_username with your real name.</p>
<p>For example, npm run start -- --username=MIKALAI</p>>

<h3 style="color: aqua">Commands:</h3>

<h3 style="color: hsl(330, 100%, 90%)">Attention, paths and file(folder) names must be enclosed in quotes <span style="color: indianred">( " " )</span> in the following commands: <span style="color: indianred">rn, cp, mv, compress, decompress</span></h3>>

<p><span style="color: indianred">up - </span> go upper from current directory (when you are in the root folder this operation shouldn't change working directory)</p>>
<p><span style="color: indianred">cd path_to_directory - </span> Go to dedicated folder from current directory (path_to_directory can be relative or absolute)</p>>
<p><span style="color: indianred">ls - </span> Print in console list of all files and folders in current directory.</p>>
<p><span style="color: indianred">cat path_to_file - </span> Read file and print it's content in console.</p>>
<p><span style="color: indianred">add new_file_name - </span> Create empty file in current working directory.</p>>
<p><span style="color: indianred">rn "path_to_file" "new_filename" - </span> Rename file. Put <span style="color: yellowgreen">path_to_file</span> and <span style="color: yellowgreen">new_filename</span> in quotation marks <span style="color: indianred">( " " ) !!!</span>.</p>>
<p><span style="color: indianred">cp "path_to_file" "path_to_new_directory" - </span> Copy file. Put <span style="color: yellowgreen">path_to_file</span> and <span style="color: yellowgreen">path_to_new_directory</span> in quotation marks <span style="color: indianred">( " " ) !!!</span>.</p>>
<p><span style="color: indianred">mv "path_to_file" "path_to_new_directory" - </span> Move file. Put <span style="color: yellowgreen">path_to_file</span> and <span style="color: yellowgreen">path_to_new_directory</span> in quotation marks <span style="color: indianred">( " " ) !!!</span>.</p>>
<p><span style="color: indianred">rm path_to_file - </span> Delete file.</p>>
<p><span style="color: indianred">os --EOL - </span> Get EOL (default system End-Of-Line) and print it to console.</p>>
<p><span style="color: indianred">os --cpus - </span> Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console.</p>>
<p><span style="color: indianred">os --homedir - </span> Get home directory and print it to console.</p>>
<p><span style="color: indianred">os --username - </span> Get current system username and print it to console.</p>>
<p><span style="color: indianred">os --architecture - </span> Get CPU architecture for which Node.js binary has compiled and print it to console.</p>>
<p><span style="color: indianred">hash path_to_file - </span> Calculate hash for file and print it into console.</p>>
<p><span style="color: indianred">compress "path_to_file" "path_to_destination" - </span> Compress file (using Brotli algorithm). Put <span style="color: yellowgreen">path_to_file</span> and <span style="color: yellowgreen">path_to_destination</span> (directory) in quotation marks <span style="color: indianred">( " " ) !!!</span>.</p>>
<p><span style="color: indianred">decompress "path_to_file" "path_to_destination" - </span> Decompress file (using Brotli algorithm). Put <span style="color: yellowgreen">path_to_file</span> and <span style="color: yellowgreen">path_to_destination</span> (directory) in quotation marks <span style="color: indianred">( " " ) !!!</span>.</p>>


