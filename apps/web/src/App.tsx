import type { Component } from 'solid-js';
import { Button, Card, Code } from '@repo/ui';

import logo from './logo.svg';

const App: Component = () => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div class="container mx-auto px-4 py-16">
        <header class="text-center">
          <img src={logo} class="mx-auto mb-8 h-32 w-32 animate-spin" alt="logo" />
          <h1 class="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            SolidJS Web App
          </h1>
          
          <div class="max-w-2xl mx-auto space-y-8">
            <Card
              className="hover:scale-105 transition-transform duration-200"
              title="Welcome to SolidJS"
              href="https://solidjs.com"
            >
              Explore the SolidJS documentation and learn about this amazing reactive framework
            </Card>
            
            <p class="text-lg text-slate-600 dark:text-slate-400">
              Edit <Code>src/App.tsx</Code> and save to reload.
            </p>
            
            <div class="flex flex-wrap justify-center gap-4">
              <Button variant="default" size="lg" appName="SolidJS Web">
                Primary Button
              </Button>
              <Button variant="outline" size="lg" appName="SolidJS Web">
                Outline Button
              </Button>
              <Button variant="secondary" size="lg" appName="SolidJS Web">
                Secondary Button
              </Button>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6 mt-12">
              <Card
                className="hover:scale-105 transition-transform duration-200"
                title="Turborepo"
                href="https://turbo.build/repo"
              >
                The high-performance build system for JavaScript & TypeScript codebases.
              </Card>
              
              <Card
                className="hover:scale-105 transition-transform duration-200"
                title="TailwindCSS"
                href="https://tailwindcss.com"
              >
                A utility-first CSS framework packed with classes to build any design.
              </Card>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default App;
