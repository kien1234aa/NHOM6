@Entity
@Table(name = "job_recommendations")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobRecommendation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer candidateId;
    private Integer jobId;
    private String reason;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
