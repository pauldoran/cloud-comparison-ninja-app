#!/usr/bin/env ruby
require "json"
#require './speedtest.rb-master/lib/speedtest/speedtest.rb'



def cpu_test
  single_thread = `sysbench --test=cpu --cpu-max-prime=20000 --num-threads=1 run | grep "total time:"`.split(":")[1].strip.gsub("s", "")
  multi_thread = `sysbench --test=cpu --cpu-max-prime=20000 --num-threads=$(grep processor /proc/cpuinfo | wc -l) run | grep "total time:"`.split(":")[1].strip.gsub("s", "")
  {"single_thread" => single_thread.to_f, "multi_thread" => multi_thread.to_f} end

def mem_test
  test = `sysbench --test=memory --memory-total-size=1G run | grep transferred`.split("(")[1].split(" ")[0].to_f * 1024 * 1024 end

def disk_write_test
  test = `dd bs=1M count=1024 if=/dev/zero of=test conv=fdatasync 2>&1`
  bytes_transferred = test.split("\n")[2].split(" ")[0].to_f
  time_taken = test.split("\n")[2].split(" ")[5].to_f
  transfer_speed = bytes_transferred / time_taken end

def disk_read_test
  test = `dd bs=1M count=1024 if=test of=/dev/null 2>&1`
  bytes_transferred = test.split("\n")[2].split(" ")[0].to_f
  time_taken = test.split("\n")[2].split(" ")[5].to_f
  transfer_speed = bytes_transferred / time_taken end

def speed_test
  x = Speedtest::SpeedTest.new(ARGV)
  x.run
end

def cpu_info
  info = File.readlines('/proc/cpuinfo')
  cpu_info_array = []
  processor_id = ""
  cpu_info_hash = Hash.new
  info.each_with_index do |line, i|
    spec = line.split(":")
    if spec.length == 2
      key = spec[0].strip.tr(" ", "_")
      value = ""
      value = spec[1].strip
      cpu_info_hash[key] = value
    end
    if line == "\n"
      instance_variable_set("@cpu_info_hash_#{i}", cpu_info_hash.clone)
      cpu_info_array.push(instance_variable_get("@cpu_info_hash_#{i}"))
    end
  end
  cpu_info_array
end

def mem_info
  info = File.readlines('/proc/meminfo')
  mem_total = info.first.split(":")[1].strip.split(" ")[0].to_i * 1024
end

report = Hash.new
report["id"] = ENV['INSTANCE_ID']
report["timestamp"] = Time.now.to_i
report["perf"] = Hash.new
report["perf"]["disk"] = Hash.new
report["specs"] = Hash.new
report["specs"]["cpu"] = Hash.new
report["specs"]["mem"] = Hash.new

report["perf"]["cpu"] = cpu_test
report["perf"]["mem"] = mem_test
report["perf"]["disk"]["write"] = disk_write_test
#report["perf"]["internet"] = speed_test
report["perf"]["disk"]["read"] = disk_read_test
report["specs"]["cpu"] = cpu_info
report["specs"]["cpu"] = cpu_info
report["specs"]["mem"]["total"] = mem_info
puts report.to_json
`curl -H "Content-Type: application/json" -d '#{report.to_json}' http://cloudcomparison.ninja/api/perftestresults`