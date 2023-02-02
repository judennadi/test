pipeline {
  agent {
    label {
      label 'docker-agent'
      retries 2
    }
  }

  triggers {
    pollSCM '*/5 * * * *'
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
