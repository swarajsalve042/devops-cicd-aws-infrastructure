pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git '<GITHUB_REPOSITORY_URL>'
      }
    }

    stage('Build & Test') {
      steps {
        sh 'npm ci && npm test'
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t analytics-app:' + '$' + '{BUILD_NUMBER} .'
      }
    }

    stage('Deploy') {
      steps {
        sh 'kubectl apply -f k8s/deployment.yaml'
      }
    }
  }
}
