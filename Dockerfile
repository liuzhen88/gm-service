FROM nodejs
MAINTAINER zhen.liu@goodwe.com

COPY run.sh /opt/
run chmod +x /opt/run.sh

CMD /opt/run.sh



