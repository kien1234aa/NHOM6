@Entity
@Table(name = "applications")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer candidateId;
    private Integer jobId;
    private String cvUrl;
    private String message;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private RecruitmentStatus status;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
