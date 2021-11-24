# Epic IPFS stuff

While browsing on the blockchain testnets looking at some contracts I noticed one of the contracts had `ipfs://` instead of an URL as token URI. That was something new for me that I've never seen before and felt like checking it out. When I went to the URL `ipfs://<some token here>` my browser didn't recognize the URL at start, so I chose to investigate what IPFS is.

### So, what is IPFS?

IPFS stands for "InterPlanetary File System". I feel like that name is a bit too much, but it kinda is exactly that. IPFS allows users to connect theirself into the network and connect with other users. Together, you can share files between all users. Whenever an user deletes a file there will be another user that still has the file. This is also why NFT projects like to use the IPFS protocol as all the images and metadata will be practically backed up in the distributed file system.

### How does it work?

IPFS works peer-to-peer. Meaning that if you want to have file A, you'll have to wait a bit for it to load in. Because your computer is now searching all the other IPFS providers for the specified file. But after you've found the file your computer will try to download it on your local machine. So from that moment forward when you try to receive that same file you'll have it in a blink of an eye. Also because your computer saved the file for future use, from that day forward whenever someone else needs that file, your computer will serve that file aswell. Making it a big circle of data.

### Is it safe?

If it's safe is a whole different story. In my opinion the program itself is safe, but is your digital data safe? In a way no, everything you save on IPFS is public to everyone else. Anyone can request your file without needing your permission. And whenever you delete your file it might take days or even weeks before it completely disappears of IPFS. As I said in the previous paragraph, whenever someone requests your file it'll be saved on their computer and served to others. The computer will eventually clear op disk space for other files and folders but it'll be there for a while.

### My own experience with IPFS

It's not like I created anything on the IPFS network, I just kind of fucked around with the program and looked at what the capabilities are. A file I uploaded about 4 days ago and deleted right after is currently still available on the network which was surprising for me. I didn't expect it to last for this long. I've also really looked into the documentation of IPFS to see if I could create a fun project which would need some kind of API implementation. Sadly I find the API documentation of the libraries I found on Github kind of vague and hard to follow. I've now set up a IPFS node myself with 290GB available for the network, you can find the IPFS node on my contact page.

### Very cool

I think IPFS is very cool in a way that it's kind of anonymous. Your computer will store the data you requested, but mostly data that other computers put on your computer for safe keeping. Meaning that whenever someone checks if you have a file available, it doesn't directly mean that you have viewed that file personally. The only thing you can be certain of is that the file that's on your computer is open and available for anyone else that needs it. I also find it cool that you can't actually see what other computers have saved on your computer. It has some kind of mysterious touch behind it.



If you're interested for IPFS, here are some resources:
[ipfs-search.com](https://ipfs-search.com/): A fricking search engine for IPFS <small>(So cool)</small>
[ipfs.io](https://ipfs.io/): Official home page of IPFS
