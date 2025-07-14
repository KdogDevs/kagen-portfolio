import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExclamationTriangleIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';

interface IPInfo {
  ip: string;
  city: string;
  region: string;
  country: string;
  org: string;
  postal: string;
  timezone: string;
}

export function BlockedPage() {
  const [ipInfo, setIpInfo] = useState<IPInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [timestamp] = useState(new Date().toISOString());

  useEffect(() => {
    const fetchIPInfo = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setIpInfo({
          ip: data.ip,
          city: data.city,
          region: data.region,
          country: data.country_name,
          org: data.org,
          postal: data.postal,
          timezone: data.timezone,
        });
      } catch (error) {
        console.error('Failed to fetch IP info:', error);
        // Fallback data
        setIpInfo({
          ip: 'Unknown',
          city: 'Unknown',
          region: 'Unknown', 
          country: 'Unknown',
          org: 'Unknown',
          postal: 'Unknown',
          timezone: 'Unknown',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchIPInfo();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-gray-50 to-orange-50 dark:from-red-900/20 dark:via-gray-900 dark:to-orange-900/20 flex items-center justify-center p-4" style={{ cursor: 'auto' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-red-200 dark:border-red-800/50"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-8 rounded-t-3xl text-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <ShieldExclamationIcon className="w-16 h-16" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              ACCESS DENIED
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-center text-red-100"
          >
            Unauthorized Access Attempt Detected & Logged
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="p-8 space-y-8">
          {/* Warning Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center space-y-4"
          >
            <ExclamationTriangleIcon className="w-16 h-16 text-orange-500 mx-auto" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
              Oh No! I'm So Sorry
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
              It seems you have tried to access a resource that you aren't supposed to access. 
              Your attempt has been logged for security purposes.
            </p>
          </motion.div>

          {/* IP Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gray-100 dark:bg-gray-700/50 rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
              Connection Information
            </h3>
            
            {loading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">IP Address</h4>
                    <p className="text-red-600 dark:text-red-400 font-mono text-lg">{ipInfo?.ip}</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Location</h4>
                    <p className="text-gray-800 dark:text-gray-200">
                      {ipInfo?.city}, {ipInfo?.region}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {ipInfo?.country} {ipInfo?.postal}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Service Provider</h4>
                    <p className="text-gray-800 dark:text-gray-200">{ipInfo?.org}</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Timestamp</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">
                      {new Date(timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Warning & Advice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl p-6 border border-orange-200 dark:border-orange-800/50"
          >
            <h3 className="text-2xl font-bold text-orange-800 dark:text-orange-200 mb-4 text-center">
              Security Notice
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-center text-lg">
                Please be a good citizen of the internet and avoid trying to access resources 
                you aren't supposed to access.
              </p>
              <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-4">
                <h4 className="font-semibold mb-2">What was logged:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Your IP address and location</li>
                  <li>• Timestamp of the access attempt</li>
                  <li>• Your internet service provider</li>
                  <li>• The requested resource</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Return Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
            >
              Return to Safety
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}