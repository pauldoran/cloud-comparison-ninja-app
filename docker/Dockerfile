FROM ubuntu
RUN apt-get update -y && apt-get install -y sysbench curl wget unzip
RUN curl -L get.rvm.io | bash -s stable
RUN /bin/bash -l -c "source /etc/profile.d/rvm.sh"
RUN /bin/bash -l -c "rvm install 2.1.2"
RUN /bin/bash -l -c "rvm 2.1.2 do gem install json mechanize --no-ri --no-rdoc"
ADD perftest.rb /perftest.rb
RUN wget https://github.com/lacostej/speedtest.rb/archive/master.zip && unzip master.zip

CMD /bin/bash -l -c "source /etc/profile.d/rvm.sh && rvm 2.1.2 do ruby /perftest.rb"