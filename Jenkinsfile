pipeline {
  agent any

  environment {
    IMAGE_NAME = 'devops-cicd-aws-demo'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install and Test') {
      steps {
        sh 'node --version'
        sh 'npm ci'
        sh 'npm test'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} .'
      }
    }
  }

  post {
    success {
      echo 'CI pipeline completed: tests passed and Docker image built locally.'
    }
    failure {
      echo 'CI pipeline failed. Review the stage logs.'
    }
  }
}
