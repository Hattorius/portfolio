# Normalize clientside hashing
While working on a project for my university, I finally came to the part where you have to create an account and be able to authenticate yourself. Then I realized: my school didn't say anything about hashing the passwords we received and how to keep stuff secure. Well, obviously I'm going to hash the passwords on my side, but that might not be obvious for the other (new) students.

### Client side hashing??
Client sided hashing would kind of change this. At form submit, the client would hash your password with a default hashing algorithm (something simple), after which it'll send the hash of your password to the server. Why? This way, the server will **never** see your password in plain text. A lot of people don't use password managers, and the password they send to a website is most of the time recycled; not secure anymore.

### Option 1: library
The first option would be to create a library that website owners could download and include to their own website to make sure that their website is at least safe. This way the user will not even notice that the library is there, but the server will never receive the password nor will it be found with a network sniffer (like Wireshark). With this, you could also request a public key from each individual website, making it even +++ secure.

### Option 2: normalize this
Make it normal for browsers to hash the password before it goes to the server. Whenever someone hits submit, the browser would hash all the inputs by type `password` before it makes the request. In this scenario, website owners / developers won't need to change anything on their side. This has 1 - point and that's that it might not be possible to request a public key for each individual website (of course this is possible, but it'll need a new standard which has to be developed for this purpose only). 

### No more server side hashing?
I don't want to go that for with this. After all, it's still a plain text request but this time with a hash instead of the plain password. It'll remove the possibility of users using sniffing tools to find your plain password (and with that information login on other websites with the same password). Every server that accepts passwords should also hash the hashed password again with the server sided secret key (or salt). This way, we can ensure the best safety for someone's password.