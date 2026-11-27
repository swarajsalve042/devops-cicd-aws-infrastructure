pipeline {
  agent any

  options {
    timestamps()
    disableConcurrentBuilds()
  }

  environment {
    IMAGE_NAME = 'devops-cicd-aws-demo'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Agent Preflight') {
      steps {
        sh '''
          set -eu
          command -v node
          command -v npm
          command -v docker
          node --version
          npm --version
          docker --version
          node -e "if (Number(process.versions.node.split('.')[0]) < 20) process.exit(1)"
          docker info >/dev/null
          echo "Agent preflight passed: Node.js 20+ and Docker daemon are available."
        '''
      }
    }

    stage('Install and Test') {
      steps {
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
