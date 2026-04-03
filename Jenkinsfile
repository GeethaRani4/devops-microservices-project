pipeline {
    agent any

    stages {

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Wait for Services') {
            steps {
                echo 'Waiting for services to start...'
                sh 'sleep 15'
            }
        }

        stage('Test API') {
            steps {
                sh 'curl http://host.docker.internal:3000/users || true'
                sh 'curl http://host.docker.internal:3000/products || true'
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Build Failed!'
        }
    }
}