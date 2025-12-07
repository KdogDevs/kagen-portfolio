import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  LockClosedIcon, 
  ServerIcon, 
  DocumentTextIcon,
  ChartBarIcon,
  KeyIcon,
  LinkIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';

// Simple password authentication - in production, use proper backend authentication
const DASHBOARD_PASSWORD = 'kagen2024'; // This should be in environment variables

interface ServiceLink {
  name: string;
  url: string;
  description: string;
  icon: typeof ServerIcon;
  credentials?: {
    username?: string;
    password?: string;
    notes?: string;
  };
}

const services: ServiceLink[] = [
  {
    name: 'Uptime Kuma',
    url: 'https://status.kagen.dev',
    description: 'System uptime monitoring dashboard',
    icon: ChartBarIcon,
    credentials: {
      username: 'admin',
      notes: 'Use family password for access'
    }
  },
  {
    name: 'Service Documentation',
    url: '#',
    description: 'Comprehensive documentation for all services',
    icon: DocumentTextIcon
  },
  {
    name: 'Network Dashboard',
    url: '#',
    description: 'Network infrastructure overview',
    icon: ServerIcon
  }
];

export default function ServicesDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showCredentials, setShowCredentials] = useState<{[key: string]: boolean}>({});

  // Check if already authenticated in session
  useEffect(() => {
    const authenticated = sessionStorage.getItem('services_authenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === DASHBOARD_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('services_authenticated', 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('services_authenticated');
    setPassword('');
  };

  const toggleCredentialVisibility = (serviceName: string) => {
    setShowCredentials(prev => ({
      ...prev,
      [serviceName]: !prev[serviceName]
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <div className="glass-lg rounded-3xl p-8 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
                  <LockClosedIcon className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-3xl font-bold font-sf-pro-display text-gray-900 dark:text-white mb-2">
                Services Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400 font-sf-pro">
                Enter password to access family services
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleLogin}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium font-sf-pro text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 glass-sm rounded-2xl font-sf-pro apple-transition
                      focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/50 dark:focus:bg-white/20
                      text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter dashboard password"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="w-5 h-5" />
                    ) : (
                      <EyeIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl"
                >
                  <p className="text-sm text-red-800 dark:text-red-200 font-sf-pro">
                    {error}
                  </p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white
                  rounded-2xl font-semibold font-sf-pro apple-transition hover:shadow-lg
                  hover:from-blue-700 hover:to-purple-700"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <LockClosedIcon className="w-5 h-5" />
                  Access Dashboard
                </span>
              </motion.button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-center"
            >
              <a
                href="/"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-sf-pro"
              >
                ← Back to Portfolio
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-md border-b border-white/20 dark:border-gray-800/50"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
              <ServerIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-sf-pro-display text-gray-900 dark:text-white">
                Services Dashboard
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-sf-pro">
                Family Services & Documentation
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 glass-sm rounded-xl font-sf-pro font-medium text-gray-700 dark:text-gray-300
              hover:bg-white/40 dark:hover:bg-white/20 apple-transition"
          >
            Logout
          </button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Uptime Kuma Embed */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold font-sf-pro-display text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <ChartBarIcon className="w-7 h-7 text-blue-600" />
            System Status Monitor
          </h2>
          <div className="glass-lg rounded-2xl p-2 overflow-hidden" style={{ height: '600px' }}>
            <iframe
              src="https://status.kagen.dev/status/services"
              className="w-full h-full rounded-xl"
              title="Uptime Kuma Status"
              style={{ border: 'none' }}
            />
          </div>
        </motion.section>

        {/* Service Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold font-sf-pro-display text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <LinkIcon className="w-7 h-7 text-purple-600" />
            Quick Access Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass-lg rounded-2xl p-6 apple-transition hover:bg-white/40 dark:hover:bg-white/20 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 apple-transition">
                      <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold font-sf-pro text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 apple-transition">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-sf-pro">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Login Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold font-sf-pro-display text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <KeyIcon className="w-7 h-7 text-green-600" />
            Login Information
          </h2>
          <div className="space-y-4">
            {services.filter(s => s.credentials).map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-lg rounded-2xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <service.icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    <h3 className="font-semibold font-sf-pro text-gray-900 dark:text-white">
                      {service.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => toggleCredentialVisibility(service.name)}
                    className="px-3 py-1 glass-sm rounded-lg text-sm font-sf-pro text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-white/20 apple-transition"
                  >
                    {showCredentials[service.name] ? (
                      <span className="flex items-center gap-1">
                        <EyeSlashIcon className="w-4 h-4" />
                        Hide
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        Show
                      </span>
                    )}
                  </button>
                </div>
                {showCredentials[service.name] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-3"
                  >
                    {service.credentials?.username && (
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                          Username
                        </p>
                        <p className="font-mono text-gray-900 dark:text-white">
                          {service.credentials.username}
                        </p>
                      </div>
                    )}
                    {service.credentials?.password && (
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                          Password
                        </p>
                        <p className="font-mono text-gray-900 dark:text-white">
                          {service.credentials.password}
                        </p>
                      </div>
                    )}
                    {service.credentials?.notes && (
                      <div className="bg-blue-100 dark:bg-blue-900/30 rounded-xl p-3">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          {service.credentials.notes}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
