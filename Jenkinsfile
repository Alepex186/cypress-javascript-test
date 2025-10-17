pipeline {
    agent {
        docker {
            image 'cypress/included:cypress-15.4.0-node-22.20.0-chrome-141.0.7390.54-1-ff-143.0.4-edge-141.0.3537.57-1'
            args '--entrypoint="" -u root'
        }
    }
    environment {
        CYPRESS_CACHE_FOLDER = '/root/.cache/Cypress'
    }
    stages {
        stage('Instalar dependencias') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Ejecutar pruebas') {
            steps {
                sh 'npx cypress run --reporter mochawesome --browser electron'
            }
        }
        stage('Generar reporte HTML') {
            steps {
                sh '''
                    npx mochawesome-merge cypress/reports/*.json --output cypress/reports/output.json
                    npx marge cypress/reports/output.json -f report -o cypress/reports/html --inline
                '''
            }
        }
        stage('Publicar reporte HTML') {
            steps {
                publishHTML([
                    reportDir: 'cypress/reports/html',
                    reportFiles: 'report.html',
                    reportName: 'Reporte Cypress',
                    keepAll: true,
                    alwaysLinkToLastBuild: true,
                    allowMissing: false
                ])
            }
        }
    }
}
