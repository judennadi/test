pipeline {
  agent {
    label {
      label 'docker-nodejs-agent'
      retries 2
    }
  }

  tools {nodejs "NodeJS"}
  
  stages {
    stage('Build') {
      steps {
          echo 'Building...'
          sh '''
          npm install
          '''
      }
    }

    stage('Test') {
      steps {
          echo 'Testing...'
          sh '''
          npm run test
          '''
      }
    }

    stage('Deploy') {
      steps {
          echo 'Deploying...'
          
      }
    }
  }
}
