__NUXT_JSONP__("/install/upgrade-to-v2", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab){return {data:[{document:{slug:"upgrade-to-v2",description:"",title:"Upgrading from 1.x",position:2.4,category:"Installation",toc:[{id:y,depth:h,text:z},{id:A,depth:h,text:B},{id:C,depth:h,text:D},{id:E,depth:h,text:F},{id:G,depth:h,text:H},{id:I,depth:h,text:J},{id:K,depth:h,text:L},{id:M,depth:h,text:N},{id:O,depth:h,text:P},{id:Q,depth:h,text:R},{id:S,depth:h,text:T}],body:{type:"root",children:[{type:b,tag:f,props:{},children:[{type:a,value:"In July 2021, we changed the way that Postal is installed. The only supported method for installing Postal is now using a container that we provide. To upgrade your 1.x installation to use containers is quite simple. You can follow these instructions to do it."}]},{type:a,value:c},{type:b,tag:i,props:{id:y},children:[{type:b,tag:g,props:{href:"#assumptions",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"For the purposes of this guide, we're going to make some assumptions about your installation. If any of these assumptions are not true, you will need to determine the appropriate route for you to upgrade."}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You have Postal installed on a single server."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Your server has a MariaDB (or MySQL) database server running on it and listening port 3306."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Your server has a RabbitMQ server running on it and listening on port 5672."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Your current installation is located at "},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fopt\u002Fpostal"}]},{type:a,value:" and your configuration is in "},{type:b,tag:d,props:{},children:[{type:a,value:U}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You use a web proxy (such as nginx, Caddy or Apache) in front of the Postal web server."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:V,props:{},children:[{type:a,value:"\nPerforming this upgrade will mean that your Postal services will be unavailable for a short period of time. We recommend scheduling some maintenance and performing the upgrade when traffic is low.\n"}]},{type:a,value:c},{type:b,tag:i,props:{id:A},children:[{type:b,tag:g,props:{href:"#preparation",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"There are a few extra system dependencies that you need to install."}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fdocs.docker.com\u002Fget-docker\u002F",rel:[W,X,Y],target:Z},children:[{type:a,value:"Docker"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fdocs.docker.com\u002Fcompose\u002Finstall\u002F",rel:[W,X,Y],target:Z},children:[{type:a,value:"docker-compose"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:V,props:{type:"warning"},children:[{type:a,value:c},{type:b,tag:"b",props:{},children:[{type:a,value:"Important:"}]},{type:a,value:" use the latest versions of these rather than simply just installing the latest package available from your operating system vendor's repositories. Instructions are linked above.\n"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If you're running an old or unsupported version of your operating system, you may wish to use this as an opportunity to upgrade. The method for doing so is outside of the scope of these documentation."}]},{type:a,value:c},{type:b,tag:i,props:{id:C},children:[{type:b,tag:g,props:{href:"#stopping-postal",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Start by stopping the Postal processes using "},{type:b,tag:d,props:{},children:[{type:a,value:w}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:i,props:{id:E},children:[{type:b,tag:g,props:{href:"#configuring-web-proxy-for-openclick-tracking",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"In Postal 2.x onwards, we no longer provide a dedicated server process for serving requests for open & click tracking. If you don't use this, you can skip to the next section. However, if you do, you need to add some configuration to your web proxy and issue some SSL certificates."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"For all the "},{type:b,tag:"strong",props:{},children:[{type:a,value:"Tracking Domains"}]},{type:a,value:" that you have configured (for example "},{type:b,tag:d,props:{},children:[{type:a,value:"track.yourdomain.com"}]},{type:a,value:") you will need to do the following:"}]},{type:a,value:c},{type:b,tag:_,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Configure a virutal host in your web proxy to route all requests for each tracking domain to the Postal web server (on port 5000)."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Ensure that all requests going through the proxy have the "},{type:b,tag:d,props:{},children:[{type:a,value:"X-Postal-Track-Host: 1"}]},{type:a,value:" header."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Issue an SSL certificate for all these hosts."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Ensure that your web proxy is listening on the IP address that you previously used for the Postal "},{type:b,tag:d,props:{},children:[{type:a,value:"fast_server"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"As there is no longer a requirement for Postal to have two IP addresses, you should update all your DNS records that reference your secondary IP to point to the main IP that you use for Postal."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{id:G},children:[{type:b,tag:g,props:{href:"#checking-configuration",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"There is no need to move any of your configuration files because Postal still expects them to exist at "},{type:b,tag:d,props:{},children:[{type:a,value:U}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:i,props:{id:I},children:[{type:b,tag:g,props:{href:"#removing-the-old-postal-helper-script",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Run the following command to backup the old Postal helper script."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"mv \u002Fusr\u002Fbin\u002Fpostal \u002Fusr\u002Fbin\u002Fpostal.v1\n"}]}]}]},{type:a,value:c},{type:b,tag:i,props:{id:K},children:[{type:b,tag:g,props:{href:"#installing-postal-v2",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"The first thing to do is to download the new Postal installation helpers repo and set up the new "},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:" command."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"git clone https:\u002F\u002Fpostalserver.io\u002Fstart\u002Finstall \u002Fopt\u002Fpostal\u002Finstall\nsudo ln -s \u002Fopt\u002Fpostal\u002Finstall\u002Fbin\u002Fpostal \u002Fusr\u002Fbin\u002Fpostal\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Next, run a normal upgrade using the new Postal command line helper. This will run a new image to upgrade your database schema to that required for Postal v2."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"postal upgrade\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Finally, you can start the Postal components."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"postal start\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"You should now find that Postal is running again and working as normal. Confirm that all process types are running using "},{type:b,tag:d,props:{},children:[{type:a,value:$}]},{type:a,value:". Your output should look like this:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"      Name                     Command               State   Ports\n------------------------------------------------------------------\npostal_cron_1       \u002Fdocker-entrypoint.sh post ...   Up\npostal_requeuer_1   \u002Fdocker-entrypoint.sh post ...   Up\npostal_smtp_1       \u002Fdocker-entrypoint.sh post ...   Up\npostal_web_1        \u002Fdocker-entrypoint.sh post ...   Up\npostal_worker_1     \u002Fdocker-entrypoint.sh post ...   Up\n"}]}]}]},{type:a,value:c},{type:b,tag:i,props:{id:M},children:[{type:b,tag:g,props:{href:"#a-note-about-smtp-ports",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If you were previously running the Postal SMTP server on any port other than 25, you can revert this configuration and have Postal listen on this port directly. To do this, you can remove any "},{type:b,tag:d,props:{},children:[{type:a,value:"iptables"}]},{type:a,value:" rules you might have and update your "},{type:b,tag:d,props:{},children:[{type:a,value:aa}]},{type:a,value:" with the new port number."}]},{type:a,value:c},{type:b,tag:i,props:{id:O},children:[{type:b,tag:g,props:{href:"#rolling-back",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If something goes wrong and you need to rollback to the previous version you can still do that by reverting the "},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:" helper and starting it again."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"postal stop\nrm \u002Fusr\u002Fbin\u002Fpostal\nmv \u002Fusr\u002Fbin\u002Fpostal.v1 \u002Fusr\u002Fbin\u002Fpostal\npostal start\n"}]}]}]},{type:a,value:c},{type:b,tag:i,props:{id:Q},children:[{type:b,tag:g,props:{href:"#tidying-up",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"When you're happy that everything is running nicely, there are some things you can do:"}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:x},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fopt\u002Fpostal\u002Fapp"}]},{type:a,value:". This is where the application itself lived and is no longer required."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:x},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fopt\u002Fpostal\u002Flog"}]},{type:a,value:". Logs are no longer stored here."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:x},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fopt\u002Fpostal\u002Fvendor"}]},{type:a,value:". This is no longer used."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Remove the backup Postal helper tool from "},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fusr\u002Fbin\u002Fpostal.v1"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"After a period of time to allow DNS updates to apply, you can remove the additional IP from the server."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{id:S},children:[{type:b,tag:g,props:{href:"#installing-on-a-new-server-with-existing-data",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:T}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If you want to simply install Postal on a new server and copy your data over, you can do so by following these instructions."}]},{type:a,value:c},{type:b,tag:_,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Create your new server and follow the instructions for installing Postal. You should have a working installation at this point."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"On your old server, stop Postal using "},{type:b,tag:d,props:{},children:[{type:a,value:w}]},{type:a,value:". Make sure it has fully stopped before continuing using "},{type:b,tag:d,props:{},children:[{type:a,value:$}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"On your new server, stop Postal using "},{type:b,tag:d,props:{},children:[{type:a,value:w}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Use whatever tool takes your fancy ("},{type:b,tag:d,props:{},children:[{type:a,value:"mysqldump"}]},{type:a,value:", "},{type:b,tag:d,props:{},children:[{type:a,value:"Mariabackup"}]},{type:a,value:" etc...) to copy your databases to your new server. Make sure you copy the "},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:" database as well as all other databases prefixed with "},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:" (or whatever you have configured your prefix to be in the "},{type:b,tag:d,props:{},children:[{type:a,value:"message_db"}]},{type:a,value:" part of your configuration)."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Ensure that your "},{type:b,tag:d,props:{},children:[{type:a,value:aa}]},{type:a,value:" is merged appropriately. For example, make sure your "},{type:b,tag:d,props:{},children:[{type:a,value:"dns"}]},{type:a,value:" section is correct. There is no need to copy the "},{type:b,tag:d,props:{},children:[{type:a,value:"rails.secret"}]},{type:a,value:" - a new secret on the new host won't be a problem."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you stop Postal cleanly before beginning, there is no need to copy any persisted data from RabbitMQ."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Shutdown your old Postal server."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Move the IP address(es) from the old server to the new one."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Start Postal on the new server using "},{type:b,tag:d,props:{},children:[{type:a,value:"postal start"}]},{type:a,value:o}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Finstall",path:"\u002Fen\u002Finstall\u002Fupgrade-to-v2",extension:".md",createdAt:ab,updatedAt:ab,to:"\u002Finstall\u002Fupgrade-to-v2"},prev:{slug:"dns-configuration",title:"DNS configuration",to:"\u002Finstall\u002Fdns-configuration"},next:{slug:"click-and-open-tracking",title:"Click & Open Tracking",to:"\u002Ffeatures\u002Fclick-and-open-tracking"}}],fetch:{},mutations:[]}}("text","element","\n","code","li","p","a",2,"h2","true",-1,"span","icon","icon-link",".","div","nuxt-content-highlight","pre","language-text","line-numbers","postal","ul","postal stop","Remove ","assumptions","Assumptions","preparation","Preparation","stopping-postal","Stopping Postal","configuring-web-proxy-for-openclick-tracking","Configuring web proxy for open\u002Fclick tracking","checking-configuration","Checking configuration","removing-the-old-postal-helper-script","Removing the old Postal helper script","installing-postal-v2","Installing Postal v2","a-note-about-smtp-ports","A note about SMTP ports","rolling-back","Rolling back","tidying-up","Tidying up","installing-on-a-new-server-with-existing-data","Installing on a new server with existing data","\u002Fopt\u002Fpostal\u002Fconfig","alert","nofollow","noopener","noreferrer","_blank","ol","postal status","postal.yml","2021-08-01T17:57:37.078Z")));