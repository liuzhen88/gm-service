FROM 192.168.1.169:8281/common/nginx:latest
MAINTAINER zhen.liu@goodwe.com

COPY run.sh /opt/
run chmod +x /opt/run.sh
COPY build /usr/share/nginx/html
CMD /opt/run.sh



